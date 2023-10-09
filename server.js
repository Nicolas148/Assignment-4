const express = require('express');
const router=require('./routes');
const app = express();
const knex = require('knex');

//import the express module
app.use(router);
app.use(express.static('public'));
//Configures Express to serve static files from the public folder.

// Serve the "index.htm" file for the root URL
app.get('/', (req, res) => {
  res.sendFile('public/html/index.html' ,{root:'./'});
});



app.get('/api/data', (req, res) => {
    const number = parseFloat(req.query.number);
    const operation = req.query.operation;

    if (isNaN(number)) {
        res.json({ error: 'Invalid number.' });
    } else if (operation === 'square') {
        res.json({ result: number * number });
    } else if (operation === 'cube') {
        res.json({ result: number * number * number });
    } else {
        res.json({ error: 'Invalid operation.' });
    }
});

//dynamic endpoint



function generateResponse(argument) {
    const number = parseFloat(argument);
    // convert as a number
    // check if it's a valid number
    if(!isNaN(number)) {
        const square = number * number;
        return {
            number: number,
            square: square
        };
    }else {
        //if argument not valid, sends an error
        return {error: 'Invalid argument. Please provide a number.'};
    }
}

//generate a json reponse



// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Move to the next middleware or route handler
  });
  
  // Define a route
  app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });


 app.post('/api/create', async (req, res) => {
    try {
      // Extract data from the request body
      const { name, description } = req.body;
  
      // Use Knex to insert the new record into the database
      const [newRecord] = await knex('Test')
        .insert({ name, description })
        .returning('*'); // Returns the newly created record
  
      res.json(newRecord);
    } catch (error) {
      console.error('Error creating a new record:', error);
      res.status(500).json({ error: 'Failed to create a new record.' });
    }
  });
  
 app.get('/api/retrieve', async (req, res) => {
    try {
      // Extract the query parameter from the request
      const searchTerm = req.query.searchTerm;
  
      // Use Knex to query the database based on the searchTerm
      const records = await knex('Test')
        .where('name', 'like', `%${searchTerm}%`)
        .select('*');
  
      res.json(records);
    } catch (error) {
      console.error('Error retrieving records:', error);
      res.status(500).json({ error: 'Failed to retrieve records.' });
    }
  });
  
 app.put('/api/update/:id', async (req, res) => {
    try {
      // Extract the ID from the route parameter
      const id = req.params.id;
      
      // Extract the data to update from the request body
      const { name, description } = req.body;
  
      // Use Knex to update the record
      await knex('Test')
        .where({ id })
        .update({ name, description });

        // Check if the record was updated successfully
     if (updateResult > 0) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: 'Record not found.' });
      }
      res.json({ success: true });
    } catch (error) {
      console.error('Error updating record:', error);
      res.status(500).json({ error: 'Failed to update record.' });
    }
  });
  
 app.delete('/api/delete/:id', async (req, res) => {
    try {
      // Extract the ID from the route parameter
      const id = req.params.id;
  
      // Use Knex to delete the record
      const deleteResult = await knex('Test')
      .where({ id })
      .del();

    // Check if the record was deleted successfully
    if (deleteResult > 0) {
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'Record not found.' });
    }
  } catch (error) {
    console.error('Error deleting record:', error);
    res.status(500).json({ error: 'Failed to delete record.' });
  }
});
  

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  })
  

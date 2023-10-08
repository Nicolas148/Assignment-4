// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development : {
  
    client: 'postgresql',
    connection: {
      database: 'games',
      user:     'nicol',
      password: 'champagne92'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

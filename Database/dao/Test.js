const db = require('../db');

class TestDAO {
    async createTest(id_user,name) {
        const [id] = await db('Test').insert({
            id_users: id_users, name: name,
        }).returning('id');
        return id;
    }
}

module.exports = new TestDAO();
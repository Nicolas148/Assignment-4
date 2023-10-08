const db = require('../db');

class TestDAO {
    async createTest(id_user) {
        const [id] = await db('Test').insert({
            id_users
        }).returning('id');
        return id;
    }
}

module.exports = new TestDAO();
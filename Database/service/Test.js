const TestDAO = require('../dao/Test');

class TestService{
    createTest(TestDto) {
        const {id_users} = TestDto;
        return TestDAO.createTest(id_users);
    }
}

module.exports = new TestService();
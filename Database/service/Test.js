const TestDAO = require('../dao/Test');

class TestService{
    createTest(TestDto) {
        const {id_users, name} = TestDto;
        return TestDAO.createTest(id_users, name);
    }
}

module.exports = new TestService();

TestDAO.createTest(2,"dupont");
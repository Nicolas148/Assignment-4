const TestService = require('../service/Test');

class TestController {
    async createTest(req, res) {
        try {
            const id = await TestService.createTest(req.body);
            res.status(201).json(id);
        }catch (err) {
            console.error(err);
        }

    }
}

module.exports = new TestController();
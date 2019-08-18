const Express = require('express');
let router = Express.Router();

const IndexController = require('../../controllers/index');


router.use('/process', IndexController.process);

router.get('/stats', IndexController.stats);

module.exports = router;
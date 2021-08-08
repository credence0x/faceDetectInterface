
const express = require('express'),
    router = express.Router(),
    tokenController = require('../../controllers/apis/tokenController');


router.get('/verify/:id/:token', tokenController.verifyToken);

module.exports = router;

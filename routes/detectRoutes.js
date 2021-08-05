const express = require('express'),
  router = express.Router(),
  detectController = require('../controllers/detectController');



router.get('/', detectController.home);


module.exports = router;

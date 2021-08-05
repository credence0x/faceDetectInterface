const express = require('express'),
  router = express.Router(),
  userController = require('../controllers/userController');

router.post('/login/authenticate', userController.authenticate,userController.redirectView);
router.get('/sign-up', userController.GetSignUp);
router.post('/create', userController.validate, userController.PostSignUp, userController.redirectView);
router.get('/login', userController.login);
router.get('/logout', userController.logout,userController.redirectView);






module.exports = router;

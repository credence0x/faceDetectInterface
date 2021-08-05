const express = require('express'),
  router = express.Router(),
  userRoutes = require('../routes/userRoutes'),
  detectRoutes = require("../routes/detectRoutes"),
  homeController = require("../controllers/homeController"),
  { ensureLoggedIn } = require('connect-ensure-login');

 

router.use('/users', userRoutes);

router.use(ensureLoggedIn("/users/login"))
router.use('/detect', detectRoutes);
router.get('/', homeController.home);

module.exports = router;

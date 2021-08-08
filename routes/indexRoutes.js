const express = require('express'),
  router = express.Router(),
  userRoutes = require('../routes/userRoutes'),
  detectRoutes = require("../routes/detectRoutes"),
  apisRoutes = require("./apis/apisRoutes"),
  homeController = require("../controllers/homeController"),
  { ensureLoggedIn } = require('connect-ensure-login');

 

router.use('/users', userRoutes);
router.use('/apis',apisRoutes);


router.use(ensureLoggedIn("/users/login"))
router.use('/detect', detectRoutes);
router.get('/', homeController.home);

module.exports = router;

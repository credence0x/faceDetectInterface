
const router = require("express").Router(),
    tokenRoutes = require("./tokenRoutes");

router.use("/token", tokenRoutes);

module.exports = router
const router = require("express").Router();
const info = require("./info");

router.use("/", info);

module.exports = router;

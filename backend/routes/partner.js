const express = require("express");
const profileController = require("../controllers/profilecontroler");
const router = express.Router();

router.get("/profie", profileController);

module.exports = router;

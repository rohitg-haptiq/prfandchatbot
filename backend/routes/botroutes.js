const express = require("express");
const { sendmail } = require("../controllers/botControllers");
const router = express.Router();

router.post("/sendbrochure", sendmail);

module.exports = router;

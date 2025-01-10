const express = require("express");
const profileController = require("../controllers/leadsController");
const router = express.Router();

router.post("/", profileController.getleads);

module.exports = router;

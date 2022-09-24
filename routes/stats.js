const express = require("express");
const router = express.Router();
const statController = require("../controllers/stats");

router.get("/stats", statController.getStats);

module.exports = router;

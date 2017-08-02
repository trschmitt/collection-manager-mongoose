const express = require("express");
const router = express.Router();
const data = require('../models/game');

router.get("/game", (req, res) => {
  res.render("new", {});
});

module.exports = router;

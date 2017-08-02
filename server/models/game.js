const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: {type: String, required: true},
  genre: [{type: String, required: true}]
  released: Date,
  console: String
})

const Game = mongoose.model("Game", gameSchema, "games");
module.exports = Game

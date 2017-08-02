const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  id: {type: Number, required: true},
  name: {type: String, required: true},
  genre: [{type: String, required: true]
  released: Date,
  platform: {
    xbox: {type: Boolean required: true},
    playstation: Boolean,
    pc: Boolean,
    nintendo: Boolean,
  }
})

const Game = mongoose.model("Game", gameSchema, "games");
module.exports = Game

const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

mongoose.connect("mongodb://localhost:27017/games");

mongoose.connection.on("error", function handleDBError(err) {
	console.error("DB Error", err);
	process.exit(128);
});

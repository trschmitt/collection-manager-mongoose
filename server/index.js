const fs = require("fs");
const path = require("path");
const url = require("url");
const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const morgan = require("morgan");
const session = require("express-session");

//mongoose//
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const app = express();

app.set("port", process.env.PORT || 3010);

app.use("/public", express.static(path.join(__dirname, "public")));

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");


app.use(expressValidator());
app.use(morgan("dev"));
app.use(
	session({
		secret: "s;dlfjhywyeyruinfsjkdh92834579:::380457",
		resave: false,
		saveUninitialized: false
	})
);
app.use(bodyParser.urlencoded({extended: false}));

// **************** ROUTES ↓
app.use("/", require("./routes/homepage"));
require("./dbConnections")
// **************** ROUTES ↑

if (require.main === module) {
	app.listen(app.get("port"), err => {
		if (err) {
			throw err;
			exit(1);
		}

		console.log(
			`Node running in ${app.get("env")} mode @ http://localhost:${app.get(
				"port"
			)}`
		);
	});
}

module.exports = app;

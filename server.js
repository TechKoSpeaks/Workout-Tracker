// Create requires for express, mongooseDB, and logging (logger) //
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// This will automatically run the seed for schema //
// ! require("./seeders/seed");

// Start app at port 8080 //
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

// Encode express and use produce static page for html //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongoose connect process //
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Requiring HTML and API routes for routing //
require("./routes/htmlRoutes.js")(app);
// API route //
require("./routes/apiRoutes.js")(app);

// App listening on selected Port //
app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}!`);
});
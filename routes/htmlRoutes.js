// Getting path names for the HTML //
const path = require("path");

module.exports = (app) => {
    // Pulling up the home page with index.html in the "/" path //
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // Pulling up the exercise.html with the /exercise path //
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    // Getting all statistics with the /stats path //
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });


};
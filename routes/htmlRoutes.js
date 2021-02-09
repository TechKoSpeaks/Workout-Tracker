// Getting path names for the HTML page //
const path = require("path");

module.exports = (app) => {
    // Path join for pulling up the home page as index.html in the "/" path //
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Path join for pulling up the exercise.html with the "/exercise" path //
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // Join for getting all statistics with the "/stats" path //
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

};
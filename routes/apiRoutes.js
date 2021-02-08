const db = require("../models");

require("mongoose");

// Exporting the application //
module.exports = (app) => {

    // Creating the post route for workouts in JSON //
    app.post("/api/workouts", (req, res) => {

        db.Workout.create({}).then(data => res.json(data))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });
    });


    // Get route for getting the last workout //
    app.get("/api/workouts", (req, res) => {

        db.Workout.find({}).then(data => res.json(data))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });
    });

    // Catch-all on the "/" performing a redirect //
    app.get("*", (req, res) => {
        res.redirect("/");
    });

};
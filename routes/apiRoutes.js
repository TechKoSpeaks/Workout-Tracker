const db = require("../models");

require("mongoose");

// Exporting the application //
module.exports = (app) => {

    // Creating the post route for workouts to be created //
    app.post("/api/workouts", (req, res) => {

        db.Workout.create({}).then(data => res.json(data))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });
    });

    // 1ST GET ROUTE //
    // Get route for getting the last workout //
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => res.json(data))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });
    });

    // PUT ROUTE //
    // Adding an exercise to the database //
    app.put("/api/workouts/:id", (req, res) => {
        // Finding workout in DB and updating by ID, pushing new exercise //
        db.Workout.findByIdAndUpdate(req.params.id,
            // push parameters ajax call is exercises body //
            { $push: { exercises: req.body } },
            { new: true, runValidators: true })

            .then(data => res.json(data))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });
    });

    // 2ND GET ROUTE //
    // Finding workouts in a specific range //
    app.get("/api/workouts/range", (req, res) => {

        // Limiting the findings to 7 for the parameters of the week, sending data as JSON //
        db.Workout.find({}).limit(7).then(data => res.json(data))
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
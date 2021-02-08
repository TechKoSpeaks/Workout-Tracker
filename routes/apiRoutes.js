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


    // Get route for getting the last workout //
    app.get("/api/workouts", (req, res) => {

        db.Workout.find({}).then(data => res.json(data))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });
    });

        // Adding an exercise to the database //
        app.put("/api/workouts/:id", (req, res) => {  
            db.Workout.findByIdAndUpdate(req.params.id,
                {$push: {exercises: req.body}},
                {new: true, runValidators: true})
                
            .then(data => res.json(data))
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
// Using mongoose to set up workout schema //
const mongoose = require("mongoose");
// Creating a const for schema from mongoose //
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // Including a date element in WorkoutSchema with default of today //
    day: 
    {
        type: Date,
        default: Date.now,
    },
    // Creating an exercise layout in the WorkoutSchema that has a type, name, duration, distance, weight, reps and sets based on exercise //
    // Name, type and duration are required //
    exercises: [
        {

            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }

        },
    ]



// Virtuals based on mongoose docs to add total duration of workout //
// using the reduce method flattens the durations into a single value for easier use //

},{ toJSON: { virtuals: true }} );

// WorkoutSchema virtual that passes total duration and returns exercise totals and duration //
WorkoutSchema.virtual("totalDuration").get(function() {
    // Return function for this.exercises.reduce to pass total and exercise parameters into an arrow function for returning the total plus exercise duration //
    return this.exercises.reduce((total, exercise)=>{
        return total + exercise.duration
    },0);
})
// Source of information: https://mongoosejs.com/docs/tutorials/virtuals.html#virtuals-in-json //


// Creating a new const for Workout using mongoose with the workout model schema, and passing workout schema to Workout object //
const Workout = mongoose.model("Workout", WorkoutSchema);
// Exporting Workout //
module.exports = Workout;
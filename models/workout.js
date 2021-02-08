// Using mongoose to set up workout schema //
const mongoose = require("mongoose");
// Creating a const for schema from mongoose //
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // Workout schema will have date element with default of today //
    day: 
    {
        type: Date,
        default: Date.now,
    },
    // Creating an exercise layout that has a type, name, duration, distance, weight, reps and sets based on exercise //
    // Name type and duration are required //
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
// using the reduce method flattens the durations into a single value for easy comprehension //

},{ toJSON: { virtuals: true }} );

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise)=>{
        return total + exercise.duration
    },0);
})


// Document source: https://mongoosejs.com/docs/tutorials/virtuals.html#virtuals-in-json //

// Creating a new const for workout with the workout model schema, and passing workout schema to Workout //
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
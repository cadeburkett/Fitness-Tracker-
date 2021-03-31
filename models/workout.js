const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercices: [{
        type: {
            type: String,
            trim: true,
            required: "Type of Exercise"
        },
        name: {
            type: String,
            trim: true,
            required: "Name of Exercise"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Duration (mins)"
        },
        weight: {
            type: Number,
            trim: true,
        },
        reps: {
            type: Number,
            trim: true,
        },
        weight: {
            type: Number,
            trim: true,
        },
        sets: {
            type: Number,
            trim: true,
        },
        distance: {
            type: Number,
            trim: true,
        },
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
const Workout = require("../models/workout");
// const db = require("../models");
const mongoose = require ("mongoose");


module.exports = (app) => {

    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        Workout.aggregate([ { $addFields: { totalDuration: {$sum: "exercises.duration"}}} ])    
        .sort({ date: -1 })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)

        });    
    });
    
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });    
    });


    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(
            req.params.id,{ $push: {exercises: req.body}}, {new: true}
        )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
        Workout.aggregate([ { $addFields: { totalDuration: {sum: "exercises.duration"}}} ])    
        .sort({ date: -1 })
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
    });

};

const db = require("../models");

module.exports = (app) => {

    app.get("/api/workouts", (req, res) => {
        db.workout.find({})
        db.workout.aggregate([ { $addFields: { totalDuration: {sum: "exercises.duration"}}} ])    
        .sort({ date: -1 })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err)
        });    
    });

    app.post("/api/workouts", (req, res) => {
        db.workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err)
        });    
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.workout.findByIdAndUpdate(
            req.params.id,{ $push: {excerises: req.body}}, {new: true}
        )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.workout.find({})
        db.workout.aggregate([ { $addFields: { totalDuration: {sum: "exercises.duration"}}} ])    
        .sort({ date: -1 })
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    });

};

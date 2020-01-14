var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs("mongodb://bri:password@ds263248.mlab.com:63248/heroku_b8pls1lk", ["workouts"]);

router.get("/workouts", function(req, res, next) {
    db.workouts.find(function(err, workouts){
        if (err) {
            res.send(err);
        }
        res.json(workouts);
    })
});

router.post("/workouts", function(req, res, next){
    var workout = req.body.data;

    if (!workout.exerciseName){
        res.status(400);
        res.json({
            error:"Bad data"
        });
    } else {
        db.workouts.save(workout, function(err, savedWorkout) {
            if (err) {
                res.send(err);
            }
            res.json(savedWorkout);
        });
    }
})

module.exports = router;
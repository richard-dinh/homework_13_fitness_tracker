const mongoose = require('mongoose')

const Workout = mongoose.model('workout', new mongoose.Schema({
  day: {
    type: Date,
    //default sets to the day that the item was created
    default: Date.now
  },
  exercises:[{
    type: {type: String},
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
}))


module.exports = Workout
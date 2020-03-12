const mongoose = require('mongoose')

const Workout = mongoose.model('workout', new mongoose.Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number
}))


module.exports = Workout
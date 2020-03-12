const router = require('express').Router()
const Workout = require('../models')

//getting all workouts
router.get('/workouts', (request, response) => {
  Workout.find()
  .then( workouts => response.json(workouts))
  .catch( error => console.error(error))
})

//create a workout
router.post('/workouts', (request, response) => {
  console.log(request.body)
  Workout.create({
    exercises: [request.body]
  })
  .then( () => response.sendStatus(200))
  .catch( error => console.error(error))
})

//update a workout
router.put('/workouts/:id', (request, response) => {
  //pushes the exercise into the specifeid id
  Workout.update({_id: request.params.id}, {$push: {exercises: request.body}})
  .then( () => response.sendStatus(200))
  .catch( error => console.error(error) )
})

//delete a workout
router.delete('/workouts/:id', (request, response) => {
  Workout.findByIdAndDelete(request.params.id)
  .then( () => response.sendStatus(200))
  .catch(error => response.sendStatus(400))
})

module.exports = router
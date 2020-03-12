const router = require('express').Router()
const {Workout} = require('../models')

//getting all workouts
router.get('/workouts', (request, response) => {
  Workout.find()
  .then( workouts => response.json(workouts))
  .catch( error => console.error(error))
})

//create a workout
router.post('/workouts', (request, response) => {
  Workout.create(request.body)
  .then( () => response.sendStatus(200))
  .catch( error => response.sendStatus(400))
})

//update a workout
router.put('/workouts/:id', (request, repsonse) => {
  Workout.update({id: request.params.id}, {$set: request.body}, (error, docs) =>{
    if(error) throw error
    response.sendStatus(200)
  })
})

//delete a workout
router.delete('/workouts/:id', (request, response) => {
  Workout.deleteOne({id: request.params.id}, (error, docs) => {
    if(error) throw error
    response.sendStatus(200)
  })
})

module.exports = router
const mongoose = require('mongoose')
const express = require('express')
const {join} = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(join(__dirname, 'public')))


mongoose.connect('mongodb://localhost/workoutdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then( () => app.listen(process.env.PORT || 3000))
.catch( error => console.error(error))
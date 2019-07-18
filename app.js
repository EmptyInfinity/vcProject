const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const app = express()
const cors = require('cors')
const jsonParser = express.json()
const path = require('path')

mongoose.set('useFindAndModify', false);

const userSchema = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  currency: {
    type: Number,
    required: true,
    min: 0
  }
})
const User = mongoose.model("User", userSchema)

mongoose.connect('mongodb://localhost:27017/vcProject', { useNewUrlParser: true }, function (err) {
  if (err) return console.log(err)
  app.listen(3000, function () {
    console.log("Server is runing..")
  })
})

app.use(express.static(__dirname + "dist"));
app.use(cors());

app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    err ? console.log(err) : res.status(200).send(users)
  })
})

app.put('/users', jsonParser, (req, res) => {
  User.findOneAndUpdate({ id: req.body.id },
    {
      $set: {
        name: req.body.name,
        location: req.body.location
      }
    },
    { new: true },
    (err, user) => {
      err ? console.log(err) : res.status(200).send(user)
    })
})

app.get('/users/:id', (req, res) => {
  User.find({ _id: req.params.id }, (err, user) => {
    err ? console.log(err) : res.status(200).send(user)
  })
})

app.post('/users', jsonParser, (req, res) => {
  let newUser = new User({
    name: req.body.name,
    location: req.body.location,
    currency: req.body.currency
  })
  newUser.save()    
  res.status(200).send(newUser)
})

app.delete('/users/:id', (req, res) => {
  User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    err ? console.log(err) : res.status(200).send(user)
  })
})

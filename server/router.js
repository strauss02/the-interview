require('dotenv').config()
const express = require('express')
const router = express.Router()
const Question = require('./models/question')

router.get('/list', (req, res) => {
  console.log('hara')
  Question.find({}).then((questions) => {
    console.log(questions)
    res.json(questions)
  })
})

module.exports = router

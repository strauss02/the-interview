require('dotenv').config()
const express = require('express')
const router = express.Router()
const Question = require('./models/question')

// Return JSON of all questions
router.get('/list', (req, res) => {
  console.log('hara')
  Question.find({}).then((questions) => {
    console.log(questions)
    res.json(questions)
  })
})

// Update a question by its ID
router.put('/update', (req, res) => {
  // const questionId = req.body.questionId
  // const newTitle = req.body.newTitle
  const { newTitle, questionId } = req.body
  Question.findOneAndUpdate({ _id: questionId }, { title: newTitle }).then(
    (result) => res.json(result)
  )
})

// Create a question
router.post('/create', (req, res) => {
  const body = req.body

  const newQuestion = new Question({
    title: body.title,
    correctAnswer: body.correctAnswer,
    answers: body.answers,
    difficulty: body.difficulty,
  })

  newQuestion
    .save()
    .then((savedQuestion) => {
      res.send('Question saved!')
    })
    .catch((err) => res.end(`Error while saving! ${err}`))
})

// Delete question by id
router.delete('/remove/:id', (req, res) => {
  console.log(req.params.id)
  const id = req.params.id
  Question.findByIdAndRemove(id, (err, docs) => {
    if (err) {
      res.end(err)
    } else {
      console.log('remove usccess')
      res.send('yay!')
    }
  })
})

// Get all questions with difficulty higher than query
router.get('/read/by/difficulty/:difficulty', (req, res) => {
  const reqDifficulty = req.params.difficulty
  console.log(reqDifficulty)
  Question.find({ difficulty: { $gte: reqDifficulty } })
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send('oh noes!')
      console.log(err)
    })
})

module.exports = router

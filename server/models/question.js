/* ===== Import Tools ===== */

const mongoose = require('mongoose')

/* =================== */

const url = process.env.MONGODB_URI

mongoose
  .connect(url)
  .then((res) => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log(`Connection failed to MongoDB. error: ${err.message}`)
  })

/* =================== */

const questionSchema = new mongoose.Schema({
  title: String,
  correctAnswer: String,
  answers: Array,
  difficulty: Number,
})

questionSchema.set('toJSON', {
  transform: (document, returendObject) => {
    returendObject.id = returendObject._id.toString()
    delete returendObject._id
    delete returendObject.__v
  },
})

module.exports = mongoose.model('Question', questionSchema)

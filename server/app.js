/* eslint-disable new-cap */

/** ******** Import tools ******* */

const express = require('express')
const app = new express()
const cors = require('cors')

/** ****** Import router modules ******* */

const errorHandler = require('./error-handler')

/** ***** General Middleware *********** */

app.use(cors())
app.use(express.json())

/** ****** Routing ************ */

// app.use(express.static('public'))

// app.use('/', redirectRouter)

app.get('/list', (req, res) => {
  res.send('aloha')
})

/** ****** Error Handler ************ */

app.use(errorHandler)

/** ************************* */

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))

/* eslint-disable new-cap */

/* =========== Import tools ========= */

const express = require('express')
const app = new express()
const cors = require('cors')

/* ========== Constants ======== */

/* ======== Import router modules ======== */

const errorHandler = require('./error-handler')
const router = require('./router')

/* =========== General Middleware ============ */

app.use(cors())
app.use(express.json())

/* ============ Routing ============= */

// app.use(express.static('public'))

app.use('/', router)

/* ========== Error Handler ============= */

app.use(errorHandler)

/* ============================ */

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log('Server is running on port', PORT))

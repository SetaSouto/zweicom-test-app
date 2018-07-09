const express = require('express')
const logger = require('winston-namespace')('app')

const routes = require('./routes')

const app = express()

app.use(express.json())

app.use('/', routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error(`There is no route with path '${req.path}'`)
  err.status = 404
  return next(err)
})

app.use(function (err, req, res, next) {
  logger.info(err)
  res.json({status: err.status, message: err.message})
})

module.exports = app

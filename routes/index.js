const express = require('express')
const router = express.Router()
const {fibonacci} = require('../middleware')

/**
 * Given the 'n' number in the request querystring returns the n and n-1 number of the fibonacci sequence.
 */
router.get('/fibonacci', fibonacci)

module.exports = router

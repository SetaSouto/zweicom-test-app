/**
 * Function to create an error with status and message.
 * @param {Number} status - Status of the error.
 * @param {String} message - Message of the error.
 */
function createError (status, message) {
  const err = new Error(message)
  err.status = status
  return err
}

/**
 * Middleware to send the n and n-1 number of the Fibonacci sequence.
 * The number must came in the query as 'n'.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @param {Object} next - Next function to call the next middleware.
 */
function fibonacci (req, res, next) {
  const n = req.query.n
  if (!n) return next(createError(400, `Missing required property 'n'`))
  if (!Number(n)) return next(createError(400, `'n' must be a number.`))
  // Starting points
  let prev = 0
  let actual = 1
  // If n == 1 or n == 2 there is no need for calculations
  if (n === 0) {
    res.json([prev])
  } else if (n === 1) {
    res.json([actual, prev])
  } else {
    let aux
    for (let i = 1; i < n; i++) {
      aux = actual
      actual = actual + prev
      prev = aux
    }
    res.json([actual, prev])
  }
}

module.exports = {
  fibonacci
}

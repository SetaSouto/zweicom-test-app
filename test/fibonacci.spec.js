/* global describe it */
process.env.LOG_LEVEL = 'error'
const app = require('../app')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)
chai.should()

function createTest (n, result, prevResult, done) {
  chai.request(app).get(`/fibonacci?n=${n}`).then(res => {
    res.body[0].should.be.equal(result)
    res.body[1].should.be.equal(prevResult)
    done()
  })
}

describe('Fibonacci tests', () => {
  it('Should return the correct answer for n = 10', done => createTest(10, 55, 34, done))
  it('Should return the correct answer for n = 11', done => createTest(11, 89, 55, done))
  it('Should return the correct answer for n = 12', done => createTest(12, 144, 89, done))
  it('Should return the correct answer for n = 13', done => createTest(13, 233, 144, done))
  it('Should return the correct answer for n = 14', done => createTest(14, 377, 233, done))
  it('Should return the correct answer for n = 15', done => createTest(15, 610, 377, done))
  it('Should return the correct answer for n = 16', done => createTest(16, 987, 610, done))
  it('Should return the correct answer for n = 17', done => createTest(17, 1597, 987, done))
  it('Should return the correct answer for n = 18', done => createTest(18, 2584, 1597, done))
  it('Should return the correct answer for n = 19', done => createTest(19, 4181, 2584, done))
  it('Should return the correct answer for n = 20', done => createTest(20, 6765, 4181, done))
})

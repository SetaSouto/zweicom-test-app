/* global describe it */
process.env.LOG_LEVEL = 'error'
const app = require('../app')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)
chai.should()

describe('App tests', () => {
  it('Should return an error with status 404 for a not found path', done => {
    chai.request(app).get('/not-a-correct-path').then(res => {
      res.body.should.have.property('status')
      res.body.status.should.be.equal(404)
      done()
    })
  })
})

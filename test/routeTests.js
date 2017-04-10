process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const knex = require('../knex');

beforeEach((done) => {
  knex.migrate.rollback()
    .then(() => {
      knex.migrate.latest()
        .then(() => {
          return knex.seed.run()
            .then(() => {
              done();
            });
        });
    });
});

afterEach((done) => {
  knex.migrate.rollback()
    .then(() => {
      done();
    });
});


describe('GET /', () => {
  it('Directs to home', done => {
    request(app)
      .get('/')
      .expect(200, done)
  })
});
describe('GET /sprite', () => {
  it('Directs to all sprites', done => {
    request(app)
      .get('/sprite')
      .expect(200, done)
  })
});
xdescribe('GET /sprite/:id', () => {

});
xdescribe('POST /sprite', () => {

});
xdescribe('GET /profile', () => {

});
xdescribe('GET /profile/:id', () => {

});
xdescribe('POST /profile', () => {

});

process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const jwt = require('jsonwebtoken');
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
describe('GET /sprite/:id', () => {
  it('Directs to a single sprite', done => {
    request(app)
      .get('/sprite/3')
      .expect(200, done)
  })
});
describe('POST /sprite without token', () => {
  it('Should return 403 without a token', done => {
    request(app)
      .post('/sprite')
      .send({
        render_url: `http://www.opengeek.net/images/ogeek/2014/12/img_83.jpg`,
        user_id: 4,
        name: 'Legoman'
      })
      .expect(403, done)
  })
});
describe('POST /sprite/:id/update', () => {
  it('Updates a sprite', done => {
    request(app)
      .post('/sprite/8/update')
      .send({
        name: 'Family Guy'
      })
      .expect(302, done)
  })
});
describe('GET /profile', () => {
  it('Redirects to home ', done => {
    request(app)
      .get('/profile')
      .expect(302, done)
  })
});
describe('GET /profile/:id', () => {
  it('Directs to the correct profile', done => {
    request(app)
      .get('/profile/4')
      .expect(200, done)
  })
});

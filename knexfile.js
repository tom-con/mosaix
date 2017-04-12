'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/spritr_db'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/spritrtest_db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

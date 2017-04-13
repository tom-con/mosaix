exports.up = function(knex) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl.string('username', 16).unique().notNullable();
    tbl.specificType('hashed_password', 'char(60)').notNullable();
    tbl.string('email', 64).unique().notNullable();
    tbl.text('user_picture').defaultTo('https://i.imgur.com/dEt2YN2.png');
    tbl.text('user_summary').defaultTo('');
    tbl.boolean('archived_account').defaultTo(false);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

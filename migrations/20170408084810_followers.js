exports.up = function(knex) {
  return knex.schema.createTable('followers', (tbl) => {
    tbl.increments();
    tbl.integer('followed').notNullable().references('users.id').onDelete('CASCADE');
    tbl.integer('follower').notNullable().references('users.id').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('followers');
};

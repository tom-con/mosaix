exports.up = function(knex) {
  return knex.schema.createTable('tags', (tbl) => {
    tbl.increments();
    tbl.string('name', 16).unique().notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tags');
};

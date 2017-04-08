exports.up = function(knex) {
  return knex.schema.createTable('sprites_tags', (tbl) => {
    tbl.increments();
    tbl.integer('sprite_id').notNullable().references('sprites.id').onDelete('CASCADE');
    tbl.integer('tags_id').notNullable().references('tags.id').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('sprites_tags');
};

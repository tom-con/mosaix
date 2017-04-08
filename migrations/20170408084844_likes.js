exports.up = function(knex) {
  return knex.schema.createTable('likes', (tbl) => {
    tbl.increments();
    tbl.integer('author_id').notNullable().references('users.id').onDelete('CASCADE');
    tbl.integer('sprite_id').notNullable().references('sprites.id').onDelete('CASCADE');
    tbl.boolean('isLiked').defaultTo(false);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('likes');
};

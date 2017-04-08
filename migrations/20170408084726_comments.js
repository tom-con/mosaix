exports.up = function(knex) {
  return knex.schema.createTable('comments', (tbl) => {
    tbl.increments();
    tbl.integer('sprite_id').notNullable().references('sprites.id').onDelete('CASCADE');
    tbl.integer('author_id').notNullable().references('users.id').onDelete('CASCADE');
    tbl.text('content').notNullable();
    tbl.boolean('edited').default(false);
    tbl.timestamps(true, true);
    tbl.boolean('archived_comment').defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};

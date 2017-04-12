exports.up = function(knex) {
  return knex.schema.createTable('sprites', (tbl) => {
    tbl.increments();
    tbl.string('name', 64).unique().notNullable();
    tbl.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
    tbl.text('description');
    tbl.text('render_url').notNullable();
    tbl.text('raw').defaultTo('{}');
    tbl.boolean('archived_sprite').defaultTo(false);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('sprites');
};

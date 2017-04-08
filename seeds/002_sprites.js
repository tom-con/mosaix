
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sprites').del()
    .then(function () {
      // Inserts seed entries
      return knex('sprites').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('sprites_id_seq', (SELECT MAX(id) FROM sprites));")
    });
};

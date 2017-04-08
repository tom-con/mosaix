
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('followers').del()
    .then(function () {
      // Inserts seed entries
      return knex('followers').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('followers_id_seq', (SELECT MAX(id) FROM followrs));")
    });
};

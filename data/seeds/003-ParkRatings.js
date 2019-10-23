exports.seed = function(knex) {
  return knex('park_ratings').insert([
    { user_id: 1, park_id: 1, rating: 5, comment: 'Loved it!'}, // 1
    { user_id: 1, park_id: 1, rating: 5, comment: 'Hated it!' }, // 2
    { user_id: 1, park_id: 1, rating: 5, comment: 'Meh...' } // 3
  ]);
};
exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'LoveHiking2019', password: 'MyCatIsAdorable' }, // 1
    { username: 'Sunrise1987', password: 'MyDogIsEvenCuter' } , // 2
    { username: 'TreePose32', password: 'YouShouldSeeMyHamster' } // 3
  ]);
};
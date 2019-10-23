exports.seed = function(knex) {
  return knex('parks').insert([
    { name: 'Daytona Beach', description: 'Busiest beach you will ever see!' }, // 1
    { name: 'Bays Mountain', description: 'Our wolf habitat is a huge hit.' } , // 2
    { name: 'Joushua Tree',  description: 'Are you brave enough to climb this tree?' } // 3
  ]);
};
exports.up = function(knex) {
    return knex.schema
        .createTable('park_ratings', tbl => {
            tbl.increments(); // makes unique ID
            tbl.integer('user_id').references('id').inTable('users');
            tbl.integer('park_id').references('id').inTable('parks');
            tbl.integer('rating');
            tbl.string('comment', 500)
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('park_ratings')
};

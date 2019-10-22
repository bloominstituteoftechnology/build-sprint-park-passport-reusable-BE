exports.up = function(knex) {
    return knex.schema
    
    .createTable('users', users => {
      users.increments(); // makes unique ID
  
      users
        .string('username', 128)
        .notNullable()
        .unique();
      users.string('password', 128).notNullable();
    })

    .createTable('parks', tbl => {
        tbl.increments(); // unique id
        tbl.string('name', 255).notNullable();
        tbl.text('description').notNullable();
        tbl.boolean('pool').defaultTo(0);
        tbl.boolean('hiking').defaultTo(0);
        tbl.boolean('fishing').defaultTo(0);
        tbl.boolean('wildlife').defaultTo(0);
        tbl.boolean('camping').defaultTo(0);
        tbl.boolean('disc_golf').defaultTo(0);
        tbl.boolean('dog_park').defaultTo(0);
        tbl.boolean('picnic_area').defaultTo(0);
        tbl.boolean('playground').defaultTo(0);
        tbl.boolean('soccer_field').defaultTo(0);
        tbl.boolean('paddle_boats').defaultTo(0);
        tbl.boolean('tennis_courts').defaultTo(0);
        tbl.boolean('walking_paths').defaultTo(0);
        tbl.boolean('bird_watching').defaultTo(0);
        tbl.boolean('volleyball_court').defaultTo(0);
        tbl.boolean('basketball_court').defaultTo(0);
    })

    .createTable('park_ratings', tbl => {
      tbl.increments(); // unique id

      tbl
        .integer('park_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('parks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      
      tbl 
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl.integer('rating').notNullable();

      tbl.text('comment');
    })

    .createTable('user_comments', tbl => {
      tbl.increments(); // unique id
      
      tbl 
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        tbl
        .integer('park_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('parks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl
        .integer('park_rating')
        .unsigned()
        .notNullable()
        .references('rating')
        .inTable('park_ratings')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl
        .text('park_comment')
        .unsigned()
        .notNullable()
        .references('comment')
        .inTable('park_ratings')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('user_comments')
        .dropTableIfExists('park_ratings')
        .dropTableIfExists('parks')
        .dropTableIfExists('users')
  };
  
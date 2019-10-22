const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    addPark,
    addAmenity,
    update,
    remove,
    getRatings,
    addRating,
    getComments,
    addComment
}

function find() {
    return db('parks');
};

function findById(id) {
    return db('parks')
        .where({ id })
        .first();
};

function addPark(park) {
    return db('parks') 
        .insert(park, 'id')
        .then(([id]) => {
            return findById(id);
        })
};

function addAmenity(amenity, park_id) {
    return db('parks')
        .insert(amenity, park_id);
};

function update(changes, id) {
    return db('parks')
        .where('id', Number(id)) 
        .update(changes);
};

function remove(id) {
    return db('parks') 
        .where('id', Number(id))
        .delete();
};

function getRatings(park_id) {
    return db('park_ratings')
        .where({ park_id })
        .first();
}

function addRating(rating, park_id) {
    return db('park_ratings')
        .insert(rating, park_id);   
}

function getComments(park_id) {
    return db('park_ratings')
        .where({ park_id })
        .first();
}

function addComment(comment, park_id) {
    return db('park_ratings')
        .insert(comment, park_id);
}
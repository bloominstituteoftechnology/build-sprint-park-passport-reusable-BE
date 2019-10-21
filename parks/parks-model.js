const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    addPark,
    addAmenity,
    update,
    remove
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
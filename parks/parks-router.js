const express = require('express');

const Parks = require('./parks-model');

const authenticate = require('../auth/authenticate-middleware');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(process.env.DB_ENV)
    Parks.find()
        .then(parks => res.status(200).json(parks))
        .catch(err => res.status(500).json({ message: err }))
});

router.get('/:id', (req, res) => {
    Parks.findById(req.params.id) 
        .then(park => {
            if (park) res.status(200).json(park)
            else res.status(404).json({ message: 'No such park' })
        })
        .catch(err => res.status(500).json({ message: err }))
});

router.post('/', (req, res) => {
    Parks.addPark(req.body)
        .then(park => res.status(201).json(park))
        .catch(err => res.status(500).json({ message: err }))
});

router.put('/:id', (req, res) => {
    Parks.findById(req.params.id)
        .then(park => {
            if (park) {
                Parks.update(req.body, req.params.id)
                .then(updatedPark => res.json(updatedPark))
            } else {
                res.status(404).json({ message: 'No such park' })
            }
        })
        .catch(err => res.status(500).json({ message: err }))
});

router.delete('/:id', (req, res) => {
    Parks.remove(req.params.id) 
        .then(deleted => res.json({ removed: deleted }))
        .catch(err => res.status(500).json({ message: err }))
});

router.get('/:id/ratings', authenticate, (req, res) => { // Front-end needs to use React Router to log this info, movie router
    const parkId = req.params.id;
    Parks.getRatings(parkId)
        .then(ratings => {
            if (ratings) res.status(200).json(ratings)
            else res.status(404).json({ message: 'Could not find ratings for that park' })
        })
        .catch(err => res.status(500).json({ message: err }))
});

router.post('/ratings/test', authenticate, (req, res) => {
    const id = req.body.park_id;
    const userId = req.user.id;
    const parkRating = req.body;
    parkRating.user_id = req.user.id;

    console.log(userId);
    
    Parks.findById(id) // Change this and below back to ID if we figure out how/why that works
        .then(park => {
            if (park) {
                Parks.addRating(parkRating, userId)
                .then(rating => {
                    res.status(201).json(rating)
                })
            } else {
                res.status(404).json({ message: 'Could not find park with that ID' })
            }
        })
        .catch(err => res.status(500).json({ message: err }))
})

router.delete('/ratings/:id', (req, res) => {
    Parks.remove(req.params.id) 
        .then(deleted => res.json({ removed: deleted }))
        .catch(err => res.status(500).json({ message: err }))
});

module.exports = router;
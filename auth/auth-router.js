const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Models and Secrets go here
const Users = require('../users/users-model');
const secrets = require('../config/secrets');

// Below endpoints begin with /api/auth
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash; 

    Users.add(user) 
        .then(newUser => res.status(201).json(newUser))
        .catch(err => res.status(500).json(err))
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {

            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ 
                    message: `Hi, ${user.username}. Have a token...`, token
                })
            } else {
                res.status(401).json({ message: 'Nope, wrong credentials.' })
            }
        })
        .catch(err => res.status(500).json({ message: err }))
});

function generateToken(user) {
    const payload = {
        user: user.username,
        subject: user.id,
    };

    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
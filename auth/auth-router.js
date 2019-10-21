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

    
})
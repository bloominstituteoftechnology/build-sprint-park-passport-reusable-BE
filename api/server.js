const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routers go here
const authRouter = require('../auth/auth-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// Routes go here
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send("It's aliveeeee!")
})

module.exports = server;
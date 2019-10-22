const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routers go here
const authRouter = require('../auth/auth-router');
const parksRouter = require('../parks/parks-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// Routes go here
server.use('/api/auth', authRouter);
server.use('/api/parks', parksRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: "It's aliveeeee!" })
})

module.exports = server;
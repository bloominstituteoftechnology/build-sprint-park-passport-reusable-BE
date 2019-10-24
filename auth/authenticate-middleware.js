const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Wrong credentials' });
      } else { 
        req.user = { 
          id: decodedToken.id
        };
        console.log('authenticate middleware ', req.user);
        next();
      };
    });
  } else {
    res.status(400).json({ message: "sorry, you don't have a token." });
  };
}

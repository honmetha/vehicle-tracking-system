const jwt = require('jsonwebtoken');
const db = require('../models');

function extractToken(req) {
  const headerAuth = req.headers['authorization'];
  if (!headerAuth) {
    return null;
  }
  const token = headerAuth.split(' ')[1];
  return token;
}

const auth = (req, res, next) => {
  try {
    const token = extractToken(req);
    const payload = jwt.verify(token, 'hon');
    db.User.findOne({ where: { name: payload.name } })
      .then((targetUser) => {
        req.user = targetUser;
        next();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Should not be here.' });
      });
  } catch (err) {
    console.log(err);
    res.status(401).send('Unauthorized');
  }
};

module.exports = auth;
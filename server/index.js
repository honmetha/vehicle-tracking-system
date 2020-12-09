const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, '..', 'client', 'build');

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.sequelize.sync({ alter: false, force: false }).then(() => {
  console.log("Database is running");
});

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/signup', (req, res) => {
  const { username, password, password2 } = req.body;
  res.send('ok');
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
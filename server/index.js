const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const cors = require('cors');

const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, '..', 'client', 'build');

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const vehicles = [
  { id: 100000000001 },
  { id: 100000000002 },
  { id: 100000000003 },
  { id: 100000000004 },
  { id: 100000000005 },
  { id: 100000000006 },
  { id: 100000000007 },
  { id: 100000000008 },
  { id: 100000000009 },
  { id: 100000000010 },
  { id: 100000000011 },
  { id: 100000000012 },
  { id: 100000000013 },
  { id: 100000000014 },
  { id: 100000000015 },
  { id: 100000000016 },
];

db.sequelize.sync({ alter: false, force: false }).then(() => {
  console.log("Database is running");
});

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/vehicles', (req, res) => {
  res.send(vehicles);
});

app.post('/signup', (req, res) => {
  const { username, password, password2 } = req.body;
  res.send('ok');
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
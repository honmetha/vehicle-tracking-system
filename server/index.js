const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const cors = require('cors');
const auth = require('./Utilities/auth');
const { request } = require('http');

const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, '..', 'client', 'build');

//app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

db.sequelize.sync({ alter: false, force: false }).then(() => {
  console.log("Database is running");
});

app.get('/', (req, res) => {
  // res.sendFile(path.join(publicPath, 'index.html'));
  res.send('ok');
});

app.get('/vehicles', auth, async (req, res) => {
  if (req.user.role !== admin) return res.send({ error: 'You are not authorized to access' })
  const users = await db.User.findAll({ attributes: ['name', 'id'] })
  res.send(users);
});

app.post('/signup', async (req, res) => {
  const { username, password, password2 } = req.body;
  const targetUser = await db.User.findOne({ where: { name: username } });

  if (username.length <= 3) return res.send({ error: 'Username must be more than 3 letters'});
  if (targetUser) return res.send({ error: 'Username has been taken' });
  if (password !== password2) return res.send({ error: 'Passwords do not match' });

  const hashedPassword = await bcryptjs.hash(password, 8);
  const newUser = await db.User.create({
    name: username,
    password: hashedPassword,
  });

  const payload = {
    name: newUser.name
  };

  const token = jwt.sign(payload, "hon", {
    expiresIn: "7d",
  })

  res.status(201).send({ message: 'User created', token });
});

app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  const targetUser = await db.User.findOne({ where: { name: username } });
  if (!targetUser) return res.send({ error: 'Username or password is invalid' });
  const isMatch = await bcryptjs.compare(password, targetUser.password);
  if (!isMatch) return res.send({ error: 'Username or password is invalid' });

  const payload = {
    name: targetUser.name
  };

  const token = jwt.sign(payload, "hon", {
    expiresIn: "7d",
  })

  res.status(201).send({ message: 'Login successful', token });
});

app.get('/getuser', auth, (req, res) => {
  res.send(req.user);
});

app.post('/connecting', auth, async (req, res) => {
  const { latitude, longitude } = req.body;
  await db.Position.create({
    latitude,
    longitude,
    user_id: req.user.id
  });
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
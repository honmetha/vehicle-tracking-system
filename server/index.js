const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, '..', 'client', 'build');

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
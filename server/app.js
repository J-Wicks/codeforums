const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path')
const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', routes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Running on port 3000');
    });
  });

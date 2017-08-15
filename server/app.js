const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Running on port 3000');
    });
  });

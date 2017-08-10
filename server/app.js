const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const models = require('./models');
const routes = require('./routes');
const morgan = require('morgan');

//setting up bodyparser
// app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

db.sync()
.then(()=>{
  app.listen(3000, function(param) {
    console.log('Running on port 3000')
  }) 
})




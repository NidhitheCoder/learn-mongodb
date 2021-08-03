const connection = require('./model');

const express = require('express');
const application = express();
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');

application.use(bodyParser.urlencoded({
  extended: true,
}));

application.set('views', path.join(__dirname, 'views'));

application.get('/', (req, res) => {
  res.send('<H1>Welcome to node with mongo project</H2>')
});

application.listen('5000', () => {
  console.log('Server Started');
});
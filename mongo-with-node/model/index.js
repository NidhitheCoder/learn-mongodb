const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/text-2',{ useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  !err && console.log("Connected Successfully")
  err && console.log('Some error occure when connect');
});

const course = require('./courses.model');
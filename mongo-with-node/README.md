# node with mongo step-by-step
- npm init
- create index.js file.
- install needed dependencies using npm.(npm i exress mongoose body-parser nodemon).
- import mongoose. mongoose helps to connect with mongodb.
- To connect mongo with node 
  ```
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/<databaseName>')
  ```
- if you get some deprecation warning then add them to mongoose connection.
  ` mongoose.connect('mongodb://localhost:27017/text-2',{ useNewUrlParser: true, useUnifiedTopology: true}, (err) => {})`

-  To change run commanf write inside package.json script object : `"start": "nodemon index.js"` and then you can run server using npm start command.

- Create model folder for creating models. models are for creating schema and for accessing data from a particular collection.

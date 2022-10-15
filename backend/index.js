const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();
const routes = require('./routes/route'); //imports routes
const dbUrl = process.env.DB_URL;
mongoose.connect(
    dbUrl,
    {
      useNewUrlParser: true
    }
  );

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("Connected successfully");
});

const app = express()
const port = 3000

//to handle json request
app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
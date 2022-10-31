const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

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

//to handle json request
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log('Server is up and running on port number ' +process.env.PORT);
});
const express = require('express');
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const app = express();
const PORT = 3001;

const MONGO_URL = "mongodb://localhost:27017";

//
//REST API Endpoints

app.get('/', function (req, res) {
  res.send('Hello World')
});

//get locations

app.get("/locations", function (req, res) {
    res.send(locations);
  });

  //Mongodb connection
MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongo is connected");
  if (err) console.log("Error while connecting");
  db = client.db("edu1we");
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
  
  
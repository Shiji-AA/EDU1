
const express = require("express");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const app = express();
const PORT = 4000;

const MONGO_URL = "mongodb://localhost:27017";

//REST API endpoints
app.get("/", function (req, res) {
  res.send("Hello Everyone🥳🥳🥳");
});


//Mongodb connection
MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongo is connected");
  if (err) console.log("Error while connecting");
 var db = client.db("ed73we");
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});

//get locations

app.get("/locations", function (req, res) {
  db.collection("location")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});




//REST API Endpoints

//app.get('/', function (req, res) {
  //res.send('Hello World')
//})

//get locations

//app.get("/locations", function (req, res) {
    //res.send(locations);
  //});

  
 // app.listen(5008);

  
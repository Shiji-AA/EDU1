const express = require('express')
const app = express()
const port = 5000;
const mongo=require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const cors = require("cors");
let db;

//middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


MongoClient.connect('mongodb://0.0.0.0:27017/edu1we', (err, client) => {
  if (err) throw err
   db = client.db('edu1we')
})
//get locations
app.get('/locations', (req, res) => {
    db.collection('location').find().toArray((err, result) => {
        if (err) throw err
        res.send(result)
        console.log(result)
      });
});



//get mealtype
app.get('/quickSearch', (req, res) => {
  db.collection('mealType').find().toArray((err, result) => {
      if (err) throw err
      res.send(result)
      console.log(result)
    });
});

//get list of restaurant
app.get('/restaurants', (req, res) => {
  let query = {};
  let stateId = Number(req.query.stateId);
  let mealId = Number(req.query.mealId);

  if (stateId) {
    query = { state_id: stateId };
  } else if (mealId) {
    query = { "mealTypes.mealtype_id": mealId };
  }

  db.collection('zomato').find(query).toArray((err, result) => {
      if (err) throw err
      res.send(result)
      console.log(result)
    });
});

//filter

app.get("/filter/:mealId", function (req, res) {
  let query = {};
  let sort = { cost: 1 };
  let mealId = Number(req.params.mealId);
  let cuisineId = Number(req.query.cuisineId);
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  if (req.query.sort) {
    sort = { cost: req.query.sort };
  }

  if (cuisineId) {
    query = {
      "mealTypes.mealtype_id": mealId,
      "cuisines.cuisine_id": cuisineId,
    };
  } else if (lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  } else if (cuisineId && lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      "cuisines.cuisine_id": cuisineId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  }
  db.collection("zomato")
    .find(query)
    .sort(sort)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//restaurant details

app.get("/details/:id", function (req, res) {
   //let id = mongo.ObjectId(req.params.id);     //first option
   let id = Number(req.params.id);  //second option
  db.collection("zomato")
  //.find({_id: id })  //first option
    .find({restaurant_id: id }) //second option
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});
//meals details for restaurant(menu)

app.get("/menu/:id", function (req, res) {
  let id = Number(req.params.id);
  db.collection("Menu")
    .find({restaurant_id: id})
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//place order

app.post("/placeorder", function (req, res) {
  console.log(req.body);
  db.collection("orders").insert(req.body, (err, result) => {
    if (err) throw err;
    res.send("Order Placed");
  });
});


//Menu Details

app.post("/menuItem", function (req, res) {
  if (Array.isArray(req.body.id)) {
    db.collection("Menu")
      .find({ menu_id: { $in: req.body.id } })
      .toArray((err, result) => {
        if (err) throw err;
        res.send(result);
      });
  } else {
    res.send("Invalid input");
  }
});

//list of orders

app.get("/orders", function (req, res) {
  let query = {};
  let email = req.query.email;
  if (email) {
    query = { email };
  }
  db.collection("orders")
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//update Order

app.put("/updateOrder/:id", function (req, res) {
  let oid = Number(req.params.id);
  db.collection("orders").updateOne(
    { orderId: oid },
    {
      $set: {
        status: req.body.status,
        bank_name: req.body.bank_name,
        date: req.body.date,
      },
    },
    (err, result) => {
      if (err) throw err;
      res.send("Order updated");
    }
  );
});

//delete orders

app.delete("/deleteOrder/:id", function (req, res) {
  let _id = mongo.ObjectId(req.params.id);
  db.collection("orders").deleteOne({ _id }, (err, result) => {
    if (err) throw err;
    res.send("Order Deleted");
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

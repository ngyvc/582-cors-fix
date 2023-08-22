const express = require("express");
const app = express();
const port = 3000;

var cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri =
  "INSERT YOUR MONGODB CONNECTION STRING HERE";

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("mongodemo");
      const student = database.collection("student");
      const result = await student.find({}).toArray();
      console.log(result);
      res.send(result);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.post("/", (req, res) => {
  console.log(req.body);
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("mongodemo");
      const student = database.collection("student");
      const result = await student.insertOne(req.params);
      console.log(result);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  res.send("Sent data via POST!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

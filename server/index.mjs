import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import db from "./Mongo.mjs";
const app = express();

import dotenv from "dotenv";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

dotenv.config();
<<<<<<< HEAD
const PORT = process.env.REACT_APP_PORT;

app.post("/shop", async (req, res) => {
  // console.log("HERE");
=======

const PORT = process.env.REACT_APP_PORT;

app.post("/shop", async (req, res) => {
  console.log("HERE");
>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222

  const body = req.body.Name;
  const amount = req.body.Amount;
  const _id = req.body._id;

  if (_id != undefined) {
    const user = { _id: _id };
    const command = { $inc: { [body]: amount } };
    let result = await db.collection("Orders").updateOne(user, command);
    res.send(result).status(200);
  }
});

app.post("/changecart", async (req, res) => {
  const body = req.body.Name;
  const amount = req.body.Amount;
  const _id = req.body._id;

  if (_id != undefined) {
    const user = { _id: _id };
    const command = { $set: { [body]: amount } };
    let result = await db.collection("Orders").updateOne(user, command);
    res.send(result).status(200);
  }
});

app.post("/start", async (req, res) => {
<<<<<<< HEAD
  try {
    const id = req.body._id;

    const result2 = await db
      .collection("Orders")
      .insertOne({ _id: id, Fire: 0, Original: 0, Mild: 0 });

    res.status(200).send("Cart Created");
  } catch (error) {
    console.log(error.message);
    res.send(error).status(500);
  }

  // console.log(id.toString());
=======
  const id = req.body.id;

  const result2 = await db
    .collection("Orders")
    .insertOne({ _id: id, Fire: 0, Original: 0, Mild: 0 });
  console.log(id.toString());
>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222
});

//Make call to MongoDB to grab data on each list
app.get("/cart", async (req, res) => {
  const id = req.query.id;

  let results = await db.collection("Orders").find({ _id: id }).toArray();
  res.status(200).json(results[0]);
});

app.post("/register", async (req, res) => {
  const body = req.body;
  console.log(body);
  const result = await db.collection("Users").insertOne(body);

  res.send(result).status(200);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

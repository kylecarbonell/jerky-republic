import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import db from "./Mongo.mjs";
const app = express();

// USE FOR SERVER nodemon server/index.mjs

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// app.use("/netlify/functions");
const PORT = 8000;

app.post("/shop", async (req, res) => {
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

app.post("/cart", async (req, res) => {
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
  const id = req.body.id;

  const result2 = await db
    .collection("Orders")
    .insertOne({ _id: id, Fire: 0, Original: 0, Mild: 0 });
  console.log(id.toString());
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

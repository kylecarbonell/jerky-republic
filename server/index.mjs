import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { db, adminDB } from "./Mongo.mjs";
const app = express();

import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.REACT_APP_PORT;

app.post("/shop", async (req, res) => {
  // console.log("HERE");

  const body = req.body.Name;
  const amount = req.body.Amount;
  const _id = req.body._id;

  if (_id != undefined) {
    const user = { _id: _id };
    const command = { $inc: { [body]: amount } };
    let result = await db.collection("Cart").updateOne(user, command);
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
    let result = await db.collection("Cart").updateOne(user, command);
    res.send(result).status(200);
  }
});

app.post("/start", async (req, res) => {
  try {
    const id = req.body._id;

    const result2 = await db
      .collection("Cart")
      .insertOne({ _id: id, Fire: 0, Original: 0, Mild: 0 });

    res.status(200).send("Cart Created");
  } catch (error) {
    console.log(error.message);
    res.send(error).status(500);
  }

  // console.log(id.toString());
});

//Make call to MongoDB to grab data on each list
app.get("/cart", async (req, res) => {
  const id = req.query.id;

  let results = await db.collection("Cart").find({ _id: id }).toArray();
  res.status(200).json(results[0]);
});

app.post("/register", async (req, res) => {
  const body = req.body;
  console.log(body);
  const result = await db.collection("Users").insertOne(body);

  res.send(result).status(200);
});

app.post("/checkout", async (req, res) => {
  try {
    const price = req.body.total;
    const payment = req.body.payment;
    const orders = {
      fire: req.body.fire,
      original: req.body.original,
      mild: req.body.mild,
    };

    const cartToken = req.body.token;

    let _id = uuid();
    _id = _id.slice(0, 8).toUpperCase();
    console.log(_id);

    const temp = new Date();
    const month = temp.getMonth() + 1;
    const day = temp.getDate();
    const year = temp.getFullYear();
    const tempHour = temp.getHours();
    const min = temp.getMinutes();
    const sec = temp.getSeconds();

    const hour = tempHour > 12 ? tempHour - 12 : tempHour;

    const time = `${month}/${day}/${year} ${hour}:${min}:${sec}`;
    console.log(time);

    const deliveryDate = `${month}/${day + 3}/${year}`;

    const body = {
      _id: _id,
      payment: payment,
      orderDate: time,
      deliveryDate: deliveryDate,
      status: "Processing",
      total: price,
      order: orders,
    };

    const query = { _id: cartToken };
    const val = { $set: { Fire: 0, Mild: 0, Original: 0 } };
    const result = await db.collection("Orders").insertOne(body);
    const del = await db.collection("Cart").updateOne(query, val);
    res.send("GOOD").status(200);
  } catch (error) {
    res.send(error.message).status(500);
  }
});

app.get("/getOrders", async (req, res) => {
  try {
    const arr = await db.collection("Orders").find({}).toArray();
    // console.log(arr);
    res.status(200).send(arr);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/getTasks", async (req, res) => {
  try {
    const arr = await adminDB.collection("Tasks").find({}).toArray();
    // console.log(arr);
    res.status(200).send(arr);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/task", async (req, res) => {
  try {
    const task = req.body;
    console.log(task);
    const add = await adminDB.collection("Tasks").insertOne(task);
    res.status(200).send("GOOD");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

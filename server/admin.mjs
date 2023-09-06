import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { db, adminDB } from "./Mongo.mjs";
import { ObjectId } from "mongodb";

const app = express();

import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

dotenv.config();
const ADMIN = process.env.REACT_APP_ADMIN;

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
    console.log(task._id);
    const add = await adminDB.collection("Tasks").insertOne(task);
    res.status(200).send("GOOD");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/deleteTask", async (req, res) => {
  try {
    const id = new ObjectId(req.body._id);

    const del = await adminDB.collection("Tasks").deleteOne({ _id: id });
    if (del.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
    res.status(200).send("GOOD");
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

app.listen(ADMIN, () => {
  console.log("Admin running on port " + ADMIN);
});

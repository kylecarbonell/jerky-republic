import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import db from "./Mongo.mjs";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
const PORT = 8000;

app.post("/shop", async (req, res) => {
  const body = req.body.Name;
  const amount = req.body.Amount;
  console.log(body);

  const user = { Name: "Kyle" };
  const command = { $inc: { [body]: amount } };
  let result = await db.collection("Orders").updateOne(user, command);
  res.send(result).status(200);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

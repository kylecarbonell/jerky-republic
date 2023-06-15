import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
const PORT = 8000;

app.post("/shop", (req, res) => {
  const body = req.body;
  console.log(body);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

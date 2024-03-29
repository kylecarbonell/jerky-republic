import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.REACT_APP_URI;

const client = new MongoClient(connectionString);

let conn = client.connect();
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

export const db = conn.db("JerkyRepublic");
export const adminDB = conn.db("JerkyRepublicAdmin");


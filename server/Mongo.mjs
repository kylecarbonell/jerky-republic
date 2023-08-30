import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://kylecarbonell:MMB98jxoWehMqwhp@rateihs.icupq8g.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn = client.connect();
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

export default conn;

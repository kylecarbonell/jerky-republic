import conn from "../server/Mongo.mjs";

exports.handler = async function (req, context) {
  try {
    const db = (await conn).db("JerkyRepublic");
    console.log("CONNECTED");
    const json = req.queryStringParameters;

    const id = json.id;
    let results = await db.collection("Orders").find({ _id: id }).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results[0]),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};

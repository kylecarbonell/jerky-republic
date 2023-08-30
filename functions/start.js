import conn from "../server/Mongo.mjs";

exports.handler = async function (req, context) {
  try {
    const db = (await conn).db("JerkyRepublic");

    const json = JSON.parse(req.body);
    const id = json._id;
    const result2 = await db
      .collection("Orders")
      .insertOne({ _id: id, Fire: 0, Original: 0, Mild: 0 });

    return {
      statusCode: 200,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};

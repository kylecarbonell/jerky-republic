import conn from "../server/Mongo.mjs";

exports.handler = async function (req, context) {
  try {
    const db = (await conn).db("JerkyRepublic");

    const json = JSON.parse(req.body);
    const body = json.Name;
    const amount = json.Amount;
    const _id = json._id;

    if (_id != undefined) {
      const user = { _id: _id };
      const command = { $inc: { [body]: amount } };
      let result = await db.collection("Orders").updateOne(user, command);

      return {
        statusCode: 200,
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};

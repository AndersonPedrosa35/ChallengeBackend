require('dotenv').config();
const { MongoClient } = require('mongodb');

const { MONGO_DB_URL, DB_NAME } = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let schema = null;

function connection() {
  return schema ? Promise.resolve(schema) :
    MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((mongo) => {
        schema = mongo.db(DB_NAME);
        return schema;
      })
      .catch((err) => console.error(err))
}

module.exports = connection;

const { MongoClient } = require('mongodb');

const MONGO_DB_URL = process.env.MONGO_URL || 'mongodb://mongodb:27017/Cookmaster';
const DB_NAME = 'wetBat';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let schema = null;

export default function connect() {
  return schema ? Promise.resolve(schema) : MongoClient
    .connect(MONGO_DB_URL, OPTIONS).then((mongo) => {
    mongo.db(DB_NAME)
  }).then((db) => {
    schema = db;
    return schema;
  }).catch((err) => {
    console.error(err);
  });
}
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://devesh:<password>@cluster0.7kgephf.mongodb.net/?appName=Cluster0";

const mongoconnect = (callback) => {
  let db;
  MongoClient.connect(url)
    .then((client) => {
      console.log("Connected to MongoDB");
      db = client.db("airbnb");
      callback(client);
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB", err);
    });
};

module.exports = mongoconnect;

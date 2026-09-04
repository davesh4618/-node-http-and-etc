const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url ="mongodb+srv://devesh:devesh123@cluster0.7kgephf.mongodb.net/?appName=Cluster0"

const mongoconnect = (callback) =>{

MongoClient.connect(url).then(client =>{
  console.log("Connected to MongoDB");
  callback(client);
}).catch(err =>{
  console.log("Failed to connect to MongoDB", err);
})
}
module.exports = mongoconnect;
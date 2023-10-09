require("dotenv").config();
const { MongoClient } = require("mongodb");

const URI = process.env.DB_URI;
// console.log(URI)

const client = new MongoClient(URI);

module.exports = client;

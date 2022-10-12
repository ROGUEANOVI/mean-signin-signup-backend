const mongosee = require("mongoose");

const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI 
: "mongodb://localhost/test";

mongosee.connect(URI)

  .then(db => console.log("Database is connected"))
  .catch(db => console.error(error));

module.exports = mongosee; 
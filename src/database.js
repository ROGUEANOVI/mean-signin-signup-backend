const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI 
: "mongodb://localhost/test";

mongoose.connect(URI)

  .then(db => console.log("Database is connected"))
  .catch(db => console.error(error));

module.exports = mongoose; 

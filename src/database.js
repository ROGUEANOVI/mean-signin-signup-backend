const mongosee = require("mongoose");

const URI = "mongodb+srv://ROGUEANOVI:2011@cluster0.oybph6d.mongodb.net/mean-signin-signup";
mongosee.connect(URI)

  .then(db => console.log("Database is connected"))
  .catch(db => console.error(error));

module.exports = mongosee; 
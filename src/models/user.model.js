const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: String,
    passwordHash: String
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("user", userSchema);
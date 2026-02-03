const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Student",
  new mongoose.Schema({
    _id: Number,
    name: String,
    degree: String,
    division: String,
    username: String,
    password: String
  })
);

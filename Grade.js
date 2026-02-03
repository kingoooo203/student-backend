const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Grade",
  new mongoose.Schema({
    _id: Number,
    student_id: Number,
    subject: String,
    exam_type: String,
    grade: String,
    remarks: String
  })
);

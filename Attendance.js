const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Attendance",
  new mongoose.Schema({
    _id: Number,
    student_id: Number,
    total_lectures: Number,
    lectures_attended: Number,
    attendance_percentage: Number
  })
);

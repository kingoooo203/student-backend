const express = require("express");
const Attendance = require("../models/Attendance");
const router = express.Router();

router.get("/", async (req, res) => res.send(await Attendance.find()));

router.get("/:id", async (req, res) =>
  res.send(await Attendance.findOne({ student_id: req.params.id }))
);

module.exports = router;

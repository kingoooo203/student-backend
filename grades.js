const express = require("express");
const Grade = require("../models/Grade");
const router = express.Router();

router.get("/", async (req, res) => res.send(await Grade.find()));

router.get("/:id", async (req, res) =>
  res.send(await Grade.find({ student_id: req.params.id }))
);

module.exports = router;

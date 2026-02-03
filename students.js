const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await Student.find());
});

router.get("/:id", async (req, res) => {
  res.send(await Student.findById(req.params.id));
});

router.post("/login", async (req, res) => {
  const user = await Student.findOne({
    username: req.body.username,
    password: req.body.password
  });

  if (!user) return res.status(404).send({message:"Invalid login"});
  res.send({message:"Login successful", user});
});

module.exports = router;

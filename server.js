const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:Admin123@cluster0.abcd123.mongodb.net/StudentDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log("Mongo Connected"))
 .catch(err => console.log(err));

app.use("/students", require("./routes/students"));
app.use("/attendance", require("./routes/attendance"));
app.use("/grades", require("./routes/grades"));

app.listen(5000, () => console.log("Server running on 5000"));

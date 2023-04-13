const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/Users");
require("dotenv").config();

const app = express();

const uri =
  "mongodb+srv://pmadut2003:Testdb123@nextapp.agerivi.mongodb.net/align-four";
const port = process.env.PORT;
main();

app.use(cors());
app.use(express.json());

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});

app.get("/getAllUsers", (req, res) => {
  userModel
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function main() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then;
  console.log("db connected");
}

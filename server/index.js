const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
const uri = process.env.URI;
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
main();

app.post("/api/login", async (req, res) => {
  console.log(req.body);

  const user = await userModel
    .findOne({
      userName: req.body.userName,
    })
    .exec();
  if (user == null) {
    return res.json({ status: "error", user: false });
  }

  const validated = await validateUser(req.body.password, user.password);

  if (user != null && validated) {
    res.json({ status: "ok", user: true });
  } else {
    res.json({ status: "error", user: false });
  }
});
app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await userModel.create({
      name: req.body.name,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
    user.save();
  } catch {
    res.json({ status: "error" });
  }
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

async function validateUser(password, hash) {
  const validated = await bcrypt.compare(password, hash);
  return validated;
}

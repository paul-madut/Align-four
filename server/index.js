const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/Users");
require("dotenv").config();

const app = express();
const uri = process.env.URI;
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
main();

app.post("/api/login", async (req, res) => {
  console.log(req.body);

  const user = await userModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
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

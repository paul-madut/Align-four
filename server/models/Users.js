const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  score: {
    type: Array,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

function validateUser(hash) {
  bcrypt.compare(hash, this.password, function (err, res) {
    if (err) {
      console.log(err);
    }
    return res;
  });
}

const userModel = mongoose.model("users", UserSchema);
module.exports = userModel;

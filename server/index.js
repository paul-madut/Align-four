const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
<<<<<<< HEAD

const userModel = require("./models/Users");

=======
const userModel = require("./models/Users");

const app = express();

const uri =
  "mongodb+srv://pmadut2003:Testdb123@nextapp.agerivi.mongodb.net/align-four";
const port = 3001;

main();

>>>>>>> Backend
async function addFluffy() {
  const fluffy = new userModel({
    name: "fluffy",
    userName: "padhduhd",
    email: "chdaiuyhaiku@gmail.com",
<<<<<<< HEAD
  });
  await fluffy.save();
}

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://pmadut2003:Testdb123@nextapp.agerivi.mongodb.net/?retryWrites=true&w=majority";
const port = 3001;
=======
    score: [0, 0, 0],
  });
  await fluffy
    .save()
    .then(() => {
      console.log("added user");
    })
    .catch((err) => {
      console.log(err);
    });
}

app.use(cors());
app.use(express.json());
>>>>>>> Backend

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});

<<<<<<< HEAD
app.get("/getAllUsers", async (req, res) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const result = await userModel.find();

    res.send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  } finally {
    await mongoose.disconnect();
  }
});

// app.post('/addNewUser', async (req,res) => {
//   try{
//     await mongoose.connect(uri,{
//        useNewUrlParser: true,
//        useUnifiedTopology: true });

//     const result = await userModel.find()

//     res.send(result);
//   } catch(error){
//     res.status(500).send({ error: error.message });

//   }finally {
//     await mongoose.disconnect();
//   }
// })

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
=======
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

addFluffy();

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
>>>>>>> Backend

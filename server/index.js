const express = require('express')
const{ MongoClient } =require('mongodb');
const app = express()
const port = 3001

const userModel = require('./models/Users')
const uri = "mongodb+srv://pmadut2003:Testdb123@nextapp.agerivi.mongodb.net/?retryWrites=true&w=majority"

app.use(cors())
app.use(express.json())

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
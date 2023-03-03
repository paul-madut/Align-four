const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userModel = require('./models/Users')

async function addFluffy(){

  const fluffy = new userModel({ name: 'fluffy', userName:'padhduhd',email:'chdaiuyhaiku@gmail.com' });
  await fluffy.save()
}

const app = express()
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://pmadut2003:Testdb123@nextapp.agerivi.mongodb.net/?retryWrites=true&w=majority"
const port = 3001



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
})

app.get('/getAllUsers', async (req,res) => {
  try{
    await mongoose.connect(uri,{
       useNewUrlParser: true, 
       useUnifiedTopology: true });
      
    const result = await userModel.find()

    res.send(result);
  } catch(error){
    res.status(500).send({ error: error.message });

  }finally {
    await mongoose.disconnect();
  }
})


app.listen(port, () => {console.log(`Server listening on port ${port}`)})
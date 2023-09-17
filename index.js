const express = require('express')
const app = express();


const bodyparser = require('body-parser')
const cors = require('cors')
const PORT = 8000;
require('dotenv').config();
require("./db")

app.use(bodyparser.json());
app.use(cors())

app.get('/',(req,res)=>{
  res.json('api is working')
})

app.listen(PORT ,()=>{
    console.log(`server is running on port ${PORT}`)
})


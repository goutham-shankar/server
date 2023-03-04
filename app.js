const dotenv = require('dotenv');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
dotenv.config(
    {path:'./config.env'}
)
const db = process.env.DATABASE;
mongoose.connect(db).then(()=>{
    console.log("connection succes")
}).catch((err)=>console.log(err))
app.get('/',(req, res)=>{
    res.send(`Hello World`);
})


app.listen(3000,()=>{
    console.log(`Server running on 3000`)
})                                                                                                  
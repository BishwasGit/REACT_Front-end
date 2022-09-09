const { application, response } = require('express');
const express = require('express');
const request = require('request');


const app = express();
const port = 5000;


app.get("/",async(req,res)=>{
    res.send("working")
})


app.listen(port,() => console.log(`listening to the port ${port} !`))


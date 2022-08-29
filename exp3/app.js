const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
}) 
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
}) 

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server running");
})
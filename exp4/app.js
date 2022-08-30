const express = require("express");
const app = express();

// the app.use() call autometic, before the whan any other route call --- middleware

app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})
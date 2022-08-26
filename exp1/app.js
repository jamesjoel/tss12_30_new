var express = require("express");
var a = express();

a.listen(3000, ()=>{
    console.log("server running");
});
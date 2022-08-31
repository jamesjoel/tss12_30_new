const express = require("express");
const app = express();
const data = require("./data");
const pro = require("./product");

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("pages/index");
})
app.get("/contact", (req, res)=>{
    res.render("pages/contact");
})
app.get("/about", (req, res)=>{
    res.render("pages/about");
})
app.get("/help", (req, res)=>{
    res.render("pages/help");
})
app.get("/product", (req, res)=>{
    var pagedata = { pro : pro };
    res.render("pages/product", pagedata);
})
app.get("/teacher", (req, res)=>{

    var pagedata = { teacher : data };
   res.render("pages/teacher", pagedata);
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running");
})
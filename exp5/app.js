const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));

// setting our view engine ---- ejs
app.set("view engine", "ejs"); 

app.get("/", (req, res)=>{
    // res.sendFile()

    var name = "mohit";
    var age = 21;

    var obj = {
        name : name,
        age : age,
        city : "mumbai",
        gender : "male"
    };

    res.render("index", obj);
})


app.get("/about", (req, res)=>{
    var color = ["red", "green", "blue", "yellow", "pink", "black", "white", "greay", "brown", "orange"];

    var obj = { col : color };

    res.render("about", obj);
})


app.get("/contact", (req, res)=>{
    var city =["indore", "mumbai", "pune", "bhopal", "delhi", "ujjain", "goa"];
    var obj = { data : city };
    res.render("contact", obj);
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server running");
})
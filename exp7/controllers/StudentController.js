const routes = require("express").Router();

const MongoClient = require("mongodb").MongoClient;

routes.get("/", (req, res)=>{
    res.render("pages/student/index");
})
routes.get("/add", (req, res)=>{
    res.render("pages/student/add");
})

routes.post("/save", (req, res)=>{
    // req.body
    // first parameter is "connection URL"
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        if(err){
            console.log(err);
            return;
        }
        // use tss12_30
        var db = con.db("tss12_30");
        db.collection("student").insertOne(req.body);
        res.redirect("/");

    });




})

module.exports = routes;
const routes =  require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017";
const dbName = "tss12_30";
const collName = "teacher";

routes.get("/", (req, res)=>{
    res.render("pages/teacher/index");
})
routes.get("/add", (req, res)=>{
    res.render("pages/teacher/add");
})
routes.post("/save", (req, res)=>{
    
    
    req.body.salary = parseInt(req.body.salary);
    
    
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).insertOne(req.body, ()=>{
            res.redirect("/teacher");
        })
    })

})


module.exports = routes;
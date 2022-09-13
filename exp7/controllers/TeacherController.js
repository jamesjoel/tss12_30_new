const routes =  require("express").Router();
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017";
const dbName = "tss12_30";
const collName = "teacher";

routes.get("/", (req, res)=>{
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find().toArray((err, result)=>{
            var pagedata = { result : result };
            res.render("pages/teacher/index", pagedata);
        })
    })

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
routes.get("/moreinfo/:id", (req, res)=>{
    var a = req.params.id;
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find({ _id : mongodb.ObjectId(a) }).toArray((err, result)=>{
            // console.log(result);
            var pagedata = { result : result[0] };
            res.render("pages/teacher/more", pagedata);
        })
    })
})


module.exports = routes;
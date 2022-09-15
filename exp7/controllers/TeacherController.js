const routes =  require("express").Router();
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017";
const dbName = "tss12_30";
const collName = "teacher";

routes.get("/", (req, res)=>{
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find({ status : 1 }).toArray((err, result)=>{
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
    req.body.status = 1;
    
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
routes.get("/delete/:id", (req, res)=>{
    var a = req.params.id; // 123
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).updateMany({ _id : mongodb.ObjectId(a)}, { $set : { status : 0 }}, (err)=>{
            res.redirect("/teacher");
        })
    })
    
    
})
routes.get("/edit/:id", (req, res)=>{
    var a = req.params.id;
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find({ _id : mongodb.ObjectId(a)}).toArray((err, result)=>{
            
            var pagedata = { result : result[0] };
            res.render("pages/teacher/edit", pagedata);
        })
    })
})
routes.post("/update/:id", (req, res)=>{
    //console.log(req.body);
    var a = req.params.id;
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).updateMany({ _id : mongodb.ObjectId(a) }, { $set : req.body }, (err)=>{
            res.redirect("/teacher");
        })
    })
})


/*
MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find({ _id : mongodb.ObjectId(a) }).toArray((err, result)=>{
            // console.log(result);
            // return;
            db.collection("teacher_backup").insertOne(result[0], (err)=>{
                if(err){
                    console.log(err);
                    return;
                }
                 db.collection(collName).deleteMany({ _id : mongodb.ObjectId(a) }, (err)=>{
                    res.redirect("/teacher");
                })
            })
        })
    })



*/

module.exports = routes;

/*
    res.sendFile() ---      File Send
    res.render()    ---     File and Data
    res.send()      ---     Data
    res.redirect()



*/


const routes = require("express").Router();
const Student = require("../models/Student");
const City = require("../models/City");

routes.get("/", (req, res)=>{
    res.render("pages/student/index");
})
routes.get("/add", (req, res)=>{
    City.find({}, (err, result)=>{
        var pagedata = { city : result };
        res.render("pages/student/add", pagedata);
    })
})

routes.post("/save", (req, res)=>{
    Student.create(req.body, ()=>{
        res.redirect("/student");
    });
})

module.exports = routes;
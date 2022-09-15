const routes = require("express").Router();
const Student = require("../models/Student");


routes.get("/", (req, res)=>{
    res.render("pages/student/index");
})
routes.get("/add", (req, res)=>{
    res.render("pages/student/add");
})

routes.post("/save", (req, res)=>{
    Student.create(req.body, ()=>{
        res.redirect("/student");
    });
})

module.exports = routes;
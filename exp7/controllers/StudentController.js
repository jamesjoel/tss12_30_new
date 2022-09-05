const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.render("pages/student/index");
})
routes.get("/add", (req, res)=>{
    res.render("pages/student/add");
})

routes.post("/save", (req, res)=>{
    // console.log(req.body);
    var data = req.body;
    var pagedata = { data : data };
    res.render("pages/student/demo", pagedata);
})

module.exports = routes;
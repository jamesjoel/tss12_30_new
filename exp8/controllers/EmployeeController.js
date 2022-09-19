const routes = require("express").Router();
const Employee = require("../models/Employee");

routes.get("/", (req, res)=>{
    Employee.find({}, (err, result)=>{
        var pagedata = { result : result };
        res.render("pages/employee/index", pagedata);
    })
});
routes.get("/add", (req, res)=>{
    res.render("pages/employee/add");
});
routes.get("/edit/:id", (req, res)=>{
    var id = req.params.id;
    Employee.find({_id:id}, (err, result)=>{
        var pagedata = { result : result[0] };
        res.render("pages/employee/edit", pagedata);
    })
});
routes.post("/edit/:id", (req, res)=>{
    var id = req.params.id;
    Employee.updateOne({_id : id }, req.body, (err)=>{
        res.redirect("/employee");
    })
})


routes.post("/add", (req, res)=>{
    Employee.create(req.body, (err)=>{
        res.redirect("/employee");
    })
});
routes.get("/delete/:id", (req, res)=>{
    var id = req.params.id;
    Employee.deleteOne({ _id : id }, (err)=>{
        res.redirect("/employee");
    })
})

module.exports = routes;
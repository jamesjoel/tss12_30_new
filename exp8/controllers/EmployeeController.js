const routes = require("express").Router();
const Employee = require("../models/Employee");
const City = require("../models/City");

routes.get("/", (req, res)=>{
    Employee.find({}, (err, result)=>{
        var pagedata = { result : result };
        res.render("pages/employee/index", pagedata);
    })
});
routes.get("/add", (req, res)=>{
    City.find({}, (err, result)=>{
        var pagedata = { city : result };
        res.render("pages/employee/add", pagedata);
    })
});
routes.get("/edit/:id", (req, res)=>{
    var id = req.params.id;
    Employee.find({_id:id}, (err, result)=>{
        City.find({}, (err, result2)=>{

            var pagedata = { result : result[0], city : result2 };
            res.render("pages/employee/edit", pagedata);
        })
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
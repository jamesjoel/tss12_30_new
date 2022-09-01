// const express = require("express");
// const routes = express.Router();


const routes = require("express").Router();
const data = require("../data");
const pro = require("../product");

routes.get("/", (req, res)=>{
    
    res.render("pages/index");
})
routes.get("/contact", (req, res)=>{
    res.render("pages/contact");
})
routes.get("/about", (req, res)=>{



    res.render("pages/about");
})
routes.get("/help", (req, res)=>{
    res.render("pages/help");
})
routes.get("/product", (req, res)=>{
    var pagedata = { pro : pro };
    res.render("pages/product", pagedata);
})
routes.get("/teacher", (req, res)=>{

    var pagedata = { teacher : data };
   res.render("pages/teacher", pagedata);
})
routes.get("/product2", (req, res)=>{

    var pagedata = { pro : pro };
   res.render("pages/product2", pagedata);
})

module.exports = routes;
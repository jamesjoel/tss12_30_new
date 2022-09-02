const routes = require("express").Router();


routes.get("/", (req, res)=>{
    res.render("pages/home/index");
})

module.exports = routes;
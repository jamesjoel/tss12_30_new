const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.render("pages/about/index");
})
routes.get("/info", (req, res)=>{
    res.render("pages/about/info");
    
})
routes.get("/more", (req, res)=>{
    res.render("pages/about/more");

})

module.exports = routes;
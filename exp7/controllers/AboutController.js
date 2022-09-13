const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.render("pages/about/index");
})
routes.get("/info", (req, res)=>{
    res.render("pages/about/info");
    
})
routes.get("/more/:city/:fee/:name", (req, res)=>{
    var x = req.params.city;
    var y = req.params.fee;
    var z = req.params.name;

    // console.log(x, y, z);
    

    res.render("pages/about/more");

})

module.exports = routes;
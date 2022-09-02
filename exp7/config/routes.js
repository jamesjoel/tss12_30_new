const routes = require("express").Router();

const HomeCtrl = require("../controllers/HomeController");
const AboutCtrl = require("../controllers/AboutController");
const ContactCtrl = require("../controllers/ContactController");


routes.use("/", HomeCtrl);
routes.use("/about", AboutCtrl);
routes.use("/contact", ContactCtrl);

module.exports = routes;

/*
app.use(()=>{

})

app.use("/about", ()=>{


})

app.use(["/about", "/help"], ()=>{

})


*/



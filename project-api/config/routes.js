const routes = require("express").Router();

routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/category", require("../controllers/CategoryController"));
routes.use("/api/product", require("../controllers/ProductController"));


module.exports = routes;
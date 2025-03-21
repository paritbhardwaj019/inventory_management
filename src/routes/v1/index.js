const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const plantRoute = require("./plant.route");
const productRoute = require("./product.route");
const inwardRoute = require("./inward.route");
const outwardRoute = require("./outward.route");
const stockRoute = require("./stock.route");
const config = require("../../config/config");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/plants",
    route: plantRoute,
  },
  {
    path: "/products",
    route: productRoute,
  },
  {
    path: "/inwards",
    route: inwardRoute,
  },
  {
    path: "/outwards",
    route: outwardRoute,
  },
  {
    path: "/stock",
    route: stockRoute,
  },
];

const devRoutes = [];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;

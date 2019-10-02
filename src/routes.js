const express = require("express");
const multer = require("multer");
const DashboardController = require("./controllers/DashboardController");
const uploadConfig = require("../src/config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const BookingController = require("./controllers/BookingController");
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.get("/spots", SpotController.index);
routes.get("/dashboard", DashboardController.show);

routes.post("/users", SessionController.store);

routes.post("/spots/:spot_id/bookings", BookingController.store);

module.exports = routes;

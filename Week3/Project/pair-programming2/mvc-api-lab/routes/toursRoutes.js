// routers/toursRouter.js

const express = require("express");
const membersController = require("../controllers/toursController");
const router = express.Router();

// Get All Tours
router.get("/", membersController.getAllTours);

// Get Single Tour by ID
router.get("/:id", membersController.getTourById);

// Create a New tour
router.post("/", membersController.createTour);

// Update Tour by ID
router.put("/:id", membersController.updateTour);

// Delete Tour by ID
router.delete("/:id", membersController.deleteTour);

module.exports = router;

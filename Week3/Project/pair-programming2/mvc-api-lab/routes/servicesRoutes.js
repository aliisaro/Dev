// routers/servicesRouter.js

const express = require("express");
const membersController = require("../controllers/servicesController");
const router = express.Router();

// Get All Services
router.get("/", membersController.getAllServices);

// Get Single Service by ID
router.get("/:id", membersController.getServiceById);

// Create a New Service
router.post("/", membersController.createService);

// Update Service by ID
router.put("/:id", membersController.updateService);

// Delete Service by ID
router.delete("/:id", membersController.deleteService);

module.exports = router;

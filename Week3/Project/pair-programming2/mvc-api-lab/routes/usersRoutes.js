// routers/membersRouter.js

const express = require("express");
const membersController = require("../controllers/usersController");
const router = express.Router();

// Get All Members
router.get("/", membersController.getAllUsers);

// Get Single Member by ID
router.get("/:id", membersController.getUserById);

// Create a New Member
router.post("/", membersController.createUser);

// Update Member by ID
router.put("/:id", membersController.updateUser);

// Delete Member by ID
router.delete("/:id", membersController.deleteUser);

module.exports = router;

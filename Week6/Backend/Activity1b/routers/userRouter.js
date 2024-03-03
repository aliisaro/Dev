const express = require("express");
const router = express.Router();
const { loginUser, signupUser } = require("../controllers/userController");
const { requireAuth, admin } = require("../middleware/requireAuth");

// Retrieve all users
router.get("/", requireAuth, admin, getUsers);

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

module.exports = router;

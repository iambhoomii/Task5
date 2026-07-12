const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Create User
router.post("/users", userController.createUser);

// Get All Users
router.get("/users", userController.getUsers);

// Update User
router.put("/users/:id", userController.updateUser);

// Delete User
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
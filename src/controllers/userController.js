const userService = require("../services/userService");

// Create User
async function createUser(req, res) {
  try {
    const { name, email } = req.body;

    const user = await userService.createUser(name, email);

    res.status(201).json(user);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    res.status(500).json({
      message: "Database error",
    });
  }
}

// Get All Users
async function getUsers(req, res) {
  try {
    const users = await userService.getUsers();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Database error",
    });
  }
}

// Update User
async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await userService.updateUser(id, name, email);

    res.json(user);
  } catch (error) {
  if (error.code === "P2025") {
    return res.status(404).json({
      message: "User not found",
    });
  }

  if (error.code === "P2002") {
    return res.status(409).json({
      message: "Email already exists",
    });
  }

  res.status(500).json({
    message: "Database error",
  });
}
}

// Delete User
async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    await userService.deleteUser(id);

    res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
  if (error.code === "P2025") {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(500).json({
    message: "Database error",
  });
}
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
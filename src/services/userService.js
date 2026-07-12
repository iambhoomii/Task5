const prisma = require("../db/prisma");

// Create User
async function createUser(name, email) {
  return await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  });
}

// Get All Users
async function getUsers() {
  return await prisma.user.findMany();
}

// Update User
async function updateUser(id, name, email) {
  return await prisma.user.update({
    where: { id: Number(id) },
    data: {
      name,
      email,
    },
  });
}

// Delete User
async function deleteUser(id) {
  return await prisma.user.delete({
    where: { id: Number(id) },
  });
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
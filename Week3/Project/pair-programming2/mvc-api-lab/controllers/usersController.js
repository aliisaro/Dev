// controllers/membersController.js

const uuid = require("uuid");
const members = require("../models/users");

// Get All Members
const getAllUsers = (req, res) => {
  res.json(members);
};

// Get Single Member by ID
const getUserById = (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

// Create a New Member
const createUser = (req, res) => {
  const newMember = {
    id: uuid.v4(),
    ...req.body,
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  members.push(newMember);
  res.json(members);
};

// Update Member by ID
const updateUser = (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    members.forEach((member, i) => {
      if (member.id === parseInt(req.params.id)) {
        members[i] = { ...member, ...req.body };
        res.json({ msg: "User updated", member: members[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

// Delete Member by ID
const deleteUser = (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const updatedMembers = members.filter(
      (member) => member.id !== parseInt(req.params.id)
    );
    res.json({ msg: "User deleted", members: updatedMembers });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

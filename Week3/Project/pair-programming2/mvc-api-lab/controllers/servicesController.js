// controllers/servicesController.js

const uuid = require("uuid");
const members = require("../models/services");

// Get All services
const getAllServices = (req, res) => {
  res.json(members);
};

// Get Single service by ID
const getServiceById = (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

// Create a New Service
const createService = (req, res) => {
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

// Update Service by ID
const updateService = (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    members.forEach((member, i) => {
      if (member.id === parseInt(req.params.id)) {
        members[i] = { ...member, ...req.body };
        res.json({ msg: "Member updated", member: members[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

// Delete Service by ID
const deleteService = (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const updatedMembers = members.filter(
      (member) => member.id !== parseInt(req.params.id)
    );
    res.json({ msg: "Member deleted", members: updatedMembers });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};

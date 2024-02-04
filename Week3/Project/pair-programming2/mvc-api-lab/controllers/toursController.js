// controllers/toursController.js

const uuid = require("uuid");
const members = require("../models/tours");

// Get All tours
const getAllTours = (req, res) => {
  res.json(members);
};

// Get Single Tour by ID
const getTourById = (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

// Create a New Tour
const createTour = (req, res) => {
  const newMember = {
    id: uuid.v4(),
    ...req.body,
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({
      msg: "This tour must include image, date, title, info, location, duration and cost.",
    });
  }

  members.push(newMember);
  res.json(members);
};

// Update Tour by ID
const updateTour = (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    members.forEach((member, i) => {
      if (member.id === parseInt(req.params.id)) {
        members[i] = { ...member, ...req.body };
        res.json({ msg: "Tour updated", member: members[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

// Delete Tour by ID
const deleteTour = (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const updatedMembers = members.filter(
      (member) => member.id !== parseInt(req.params.id)
    );
    res.json({ msg: "Tour deleted", members: updatedMembers });
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};

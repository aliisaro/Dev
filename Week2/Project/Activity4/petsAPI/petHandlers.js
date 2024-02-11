const pets = [];

let nextPetId = 1;

function getNewPetId() {
  const newPetId = nextPetId;
  nextPetId++;
  return newPetId;
}

//POST /pets
const createPet = (req, res) => {
  const name = req.body.name;
  const species = req.body.species;
  const age = req.body.age;
  const color = req.body.color;
  const weight = req.body.weight;
  const newPet = {
    petId: getNewPetId(),
    name,
    species,
    age,
    color,
    weight,
  };
  pets.push(newPet);
  req.json(newPet);
};

// GET /pets
const getAllPets = (req, res) => {
  console.log(pets);
  res.json(pets);
};

// GET /pets/:petId
const getPetById = (req, res) => {
  const petId = req.params.petId;
  const pet = pets.find((pet) => pet.petId == petId);
  res.json(pet);
};

// PUT /pets/:petId
const updatePet = (req, res) => {
  const name = req.body.name;
  const species = req.body.species;
  const age = req.body.age;
  const color = req.body.color;
  const weight = req.body.weight;
  const petId = req.params.petId;
  const pet = pets.find((pet) => pet.petId == petId);
  pet.name = name;
  pet.species = species;
  pet.age = age;
  pet.color = color;
  pet.weight = weight;
  res.json(pet);
};

// DELETE /pets/:petId
const deletePet = (req, res) => {
  const petId = req.params.petId;
  const petIdx = pets.findIndex((pet) => pet.petId == petId);
  pets.splice(petIdx, 1);
  res.json({ message: "success" });
};

module.exports = {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
};

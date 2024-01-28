const pets = [];

const createPet = (req, res) => {
    const newPet = {
        petId: getNewPetId(),
        name,
    }
    pets.push(newPet);
    req.json(newPet);
}


let nextPetId = 1;
function getNewPetId() {
    const newPetId = nextPetId;
    nextPetId++
    return newPetId;
}


module.exports = {
    getAllPets,
    getPetbyID,
    createPet,
    updatePet,
    deletePet,
}
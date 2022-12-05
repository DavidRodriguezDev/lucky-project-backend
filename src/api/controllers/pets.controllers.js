
const Pet = require("../models/pets.models") //Requerimos el modelo de adopción

const getAllPets = async (request, response) => {
    
    try {
        
        const allPets = await Pet.find();
        return response.status(200).json(allPets);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const getPet = async (request, response) => {

    try {
        
        const {id} = request.params;
        const allPets = await Pet.findById(id);
        return response.status(200).json(allPets);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const postNewPet = async (request, response) => {

    try {
        console.log(request.body);
        const {species, birthday, sex, size, weight, personality, history, vaccinated, dewormed, healthy, sterilized, identified, microchip, about, requirements, rate, shipping } = request.body;
        const newPet = new Pet( {species, birthday, sex, size, weight, personality, history, vaccinated, dewormed, healthy, sterilized, identified, microchip, about, requirements, rate, shipping} );
        const createdPet = await newPet.save();
        return response.status(201).json(createdPet);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const putPet = async (request, response) => {

    try {

        const {id} = request.params //Recogemos de request.params el identificador.
        const putPet = new Pet(request.body);
        putPet._id = id;

        const petDb = await Pet.findByIdAndUpdate(id, putPet);
        
        if(!petDb) {
            return response.status(404).json({message: "Pet not found"})
        }

        return response.status(200).json(putPet);

        
    } catch (error) {
        
        return response.status(500).json(error);

    }

}

const deletePet = async (request, response) => {

    try {
        
        const {id} = request.params;
        const petDb = await Pet.findByIdAndDelete(id);
        
        if(!petDb) {
            response.status(404).json({message : "Pet not found"})
        }

        return response.status(200).json(petDb);


    } catch (error) {
        
        return response.status(500).json(error);

    }

}

module.exports = {getAllPets, getPet, postNewPet, putPet, deletePet}
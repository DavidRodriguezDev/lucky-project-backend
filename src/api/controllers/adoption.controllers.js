
const Adoption = require("../models/adoption.models") //Requerimos el modelo de adopción

const getAllAdoption = async (request, response) => {
    
    try {
        
        const allAdoptions = await Adoption.find();
        return response.status(200).json(allAdoptions);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const getAdoption = async (request, response) => {

    try {
        
        const {id} = request.params;
        const allAdoptions = await Adoption.findById(id);
        return response.status(200).json(allAdoptions);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const postNewAdoption = async (request, response) => {

    try {
        console.log(request.body);
        const {species, birthday, sex, size, weight, personality, history, vaccinated, dewormed, healthy, sterilized, identified, microchip, about, requirements, rate, shipping } = request.body;
        const newAdoption = new Adoption( {species, birthday, sex, size, weight, personality, history, vaccinated, dewormed, healthy, sterilized, identified, microchip, about, requirements, rate, shipping} );
        const createdAdoption = await newAdoption.save();
        return response.status(201).json(createdAdoption);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const putAdoption = async (request, response) => {

    try {

        const {id} = request.params //Recogemos de request.params el identificador.
        const putAdoption = new Adoption(request.body);
        putAdoption._id = id;

        const adoptionDb = await Adoption.findByIdAndUpdate(id, putAdoption);
        
        if(!adoptionDb) {
            return response.status(404).json({message: "Adoption not found"})
        }

        return response.status(200).json(putAdoption);

        
    } catch (error) {
        
        return response.status(500).json(error);

    }

}

const deleteAdoption = async (request, response) => {

    try {
        
        const {id} = request.params;
        const adoptionDb = await Adoption.findByIdAndDelete(id);
        
        if(!adoptionDb) {
            response.status(404).json({message : "Adoption not found"})
        }

        return response.status(200).json(adoptionDb);


    } catch (error) {
        
        return response.status(500).json(error);

    }

}

module.exports = {getAllAdoption, getAdoption, postNewAdoption, putAdoption, deleteAdoption}
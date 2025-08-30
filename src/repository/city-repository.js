const { City } = require('../models/index')

class CityRepository {
    async createCity({name}) {
        try{
           const city = await City.create({name});
           return city;

        }catch(error){
           throw new Error("Error creating city");
        }
    }

    async deleteCity(cityId) {
        try{
           await City.destroy({ 
            where: { 
                id: cityId 
            } 
        });
        }catch(error){
            throw new Error("Error deleting city");
        }
    }
}

module.exports = CityRepository;
const { Flight } = require('../models/index');
const { Op, where } = require('sequelize');

class FlightRepository {

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice){
            Object.assign(filter, { 
                [Op.and]: [
                    {price: {[Op.gte]: data.minPrice}},
                    {price: {[Op.lte]: data.maxPrice}}
                ]
            })
        }else if(data.minPrice){
            Object.assign(filter, {price: {[Op.gte]: data.minPrice}})
        }else if(data.maxPrice){
            Object.assign(filter, {price: {[Op.lte]: data.maxPrice}})
        }
        return filter;
    }
    async createFlight(data){
        try{
            const flight = await Flight.create(data);
            return flight;
        }catch(error){
            console.error("Error creating flight:", error);
            throw error;
        }
    }

    async getFlight(flightId){
        try{
            const flight = await Flight.findByPk(flightId);
            return flight;
        }catch(error){
            console.error("Error fetching flight:", error);
            throw error;
        }
    }

    async getAllFlights(filter){
        try{
            const filterObject = this.#createFilter(filter);
            const flights = await Flight.findAll({
                where: filterObject
            });
            return flights;
        }catch(error){
            console.error("Error fetching all flights:", error);
            throw error;
        }
    }
}

module.exports = FlightRepository;

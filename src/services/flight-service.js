const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try{
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw new Error("Arrival time cannot be less than departure time");
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            if (!airplane) {
                throw new Error("Airplane not found");
            }
            const flight = await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity});
            return flight;
        }catch(error){
            console.error("Error creating flight:", error);
            throw error;
        }
    }
}

module.exports = FlightService;

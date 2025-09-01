const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    });
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Flight created successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: error.message,
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    return res.status(200).json({
      data: flights,
      success: true,
      message: "Flights fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: error.message,
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};

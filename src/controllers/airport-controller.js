const AirportService = require('../services/airport-service');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airportData = req.body;
        const newAirport = await airportService.create(airportData);
        res.status(201).json({
            data: newAirport,
            success: true,
            message: 'Airport created successfully',
            err: {}
        });
    } catch (error) {
        res.status(500).json({ 
            data: {},
            success: false,
            message: 'Creating airport failed',
            error: error.message 
        });
    }
};

module.exports = {
    create
};
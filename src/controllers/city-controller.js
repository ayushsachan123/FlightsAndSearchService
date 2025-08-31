const { CityService } = require('../services/index')

const cityService = new CityService();

const create = async (req, res) => {
    const cityData = req.body;
    try {
        const city = await cityService.createCity(cityData);
        res.status(201).json({
            data: city,
            success: true,
            message: 'City created successfully',
            err: {}
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'City creation failed',
            err: error.message
        });
    }
}

const update = async (req, res) => {
    const cityId = req.params.id;
    const cityData = req.body;
    try {
        const updatedCity = await cityService.updateCity(cityId, cityData);
        res.status(200).json({
            data: updatedCity,
            success: true,
            message: 'City updated successfully',
            err: {}
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'City update failed',
            err: error.message
        });
    }
}

const get = async (req, res) => {
    const cityId = req.params.id;
    try {
        const city = await cityService.getCity(cityId);
        res.status(200).json({
            data: city,
            success: true,
            message: 'City retrieved successfully',
            err: {}
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'City retrieval failed',
            err: error.message
        });
    }
}

const destroy = async (req, res) => {
    const cityId = req.params.id;
    try {
        const response = await cityService.deleteCity(cityId);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'City deleted successfully',
            err: {}
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'City deletion failed',
            err: error.message
        });
    }
}

module.exports = {
    create,
    update,
    get,
    destroy
};

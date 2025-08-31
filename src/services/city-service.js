const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
        const city = await this.cityRepository.createCity(data);
        return city;
    } catch (error) {
        console.error("Error creating city:", error);
        throw new Error("City creation failed");
    }
  }

  async deleteCity(cityId) {
    try {
      const result = await this.cityRepository.deleteCity(cityId);
      return result;
    } catch (error) {
        console.error("Error deleting city:", error);
        throw new Error("City deletion failed");
    }
  }

  async updateCity(cityId, data) {
    try {
        const updatedCity = await this.cityRepository.updateCity(cityId, data);
        return updatedCity;
    } catch (error) {
        console.error("Error updating city:", error);
        throw new Error("City update failed");
    }
  }

  async getAllCities() {
    try {
        const cities = await this.cityRepository.getAllCities();
        return cities;
    } catch (error) {
        console.error("Error getting all cities:", error);
        throw new Error("City retrieval failed");
    }
  }

  async getCity(cityId) {
    try {
        const city = await this.cityRepository.getCity(cityId);
        return city;
    } catch (error) {
        console.error("Error getting city:", error);
        throw new Error("City retrieval failed");
    }
  }
}

module.exports = CityService;

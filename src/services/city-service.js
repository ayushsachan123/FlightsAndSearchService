const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
        const city = await this.CityRepository.create(data);
        return city;
    } catch (error) {
        console.error("Error creating city:", error);
        throw new Error("City creation failed");
    }
  }

  async deleteCity(cityId) {
    try {
      const result = await this.CityRepository.delete(cityId);
      return result;
    } catch (error) {
        console.error("Error deleting city:", error);
        throw new Error("City deletion failed");
    }
  }

  async updateCity(cityId, data) {
    try {
        const updatedCity = await this.CityRepository.update(cityId, data);
        return updatedCity;
    } catch (error) {
        console.error("Error updating city:", error);
        throw new Error("City update failed");
    }
  }

  async getCity(cityId) {
    try {
        const city = await this.CityRepository.getById(cityId);
        return city;
    } catch (error) {
        console.error("Error getting city:", error);
        throw new Error("City retrieval failed");
    }
  }
}

module.exports = CityService;

import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  // Snacks API Methods

  /**
   * Fetch all snacks.
   * @returns {Promise<Array>} List of snacks.
   */
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  /**
   * Fetch a single snack by ID.
   * @param {number} id - ID of the snack.
   * @returns {Promise<Object>} The snack data.
   */
  static async getSnack(id) {
    const result = await axios.get(`${BASE_API_URL}/snacks/${id}`);
    return result.data;
  }

  /**
   * Create a new snack.
   * @param {Object} data - Data for the new snack.
   * @returns {Promise<Object>} The created snack.
   */
  static async createSnack(data) {
    const result = await axios.post(`${BASE_API_URL}/snacks`, data);
    return result.data;
  }

  /**
   * Update an existing snack by ID.
   * @param {number} id - ID of the snack to update.
   * @param {Object} data - Updated data for the snack.
   * @returns {Promise<Object>} The updated snack.
   */
  static async updateSnack(id, data) {
    const result = await axios.put(`${BASE_API_URL}/snacks/${id}`, data);
    return result.data;
  }

  /**
   * Delete a snack by ID.
   * @param {number} id - ID of the snack to delete.
   * @returns {Promise<Object>} The deleted snack.
   */
  static async deleteSnack(id) {
    const result = await axios.delete(`${BASE_API_URL}/snacks/${id}`);
    return result.data;
  }

  // Drinks API Methods

  /**
   * Fetch all drinks.
   * @returns {Promise<Array>} List of drinks.
   */
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  /**
   * Fetch a single drink by ID.
   * @param {number} id - ID of the drink.
   * @returns {Promise<Object>} The drink data.
   */
  static async getDrink(id) {
    const result = await axios.get(`${BASE_API_URL}/drinks/${id}`);
    return result.data;
  }

  /**
   * Create a new drink.
   * @param {Object} data - Data for the new drink.
   * @returns {Promise<Object>} The created drink.
   */
  static async createDrink(data) {
    const result = await axios.post(`${BASE_API_URL}/drinks`, data);
    return result.data;
  }

  /**
   * Update an existing drink by ID.
   * @param {number} id - ID of the drink to update.
   * @param {Object} data - Updated data for the drink.
   * @returns {Promise<Object>} The updated drink.
   */
  static async updateDrink(id, data) {
    const result = await axios.put(`${BASE_API_URL}/drinks/${id}`, data);
    return result.data;
  }

  /**
   * Delete a drink by ID.
   * @param {number} id - ID of the drink to delete.
   * @returns {Promise<Object>} The deleted drink.
   */
  static async deleteDrink(id) {
    const result = await axios.delete(`${BASE_API_URL}/drinks/${id}`);
    return result.data;
  }
}

export default SnackOrBoozeApi;

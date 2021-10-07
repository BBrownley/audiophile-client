import axios from "axios";

const baseUrl = "http://localhost:1337";

// Get all items belonging to a category
const getAllFromCategory = async category => {
  try {
    const req = await axios.get(`${baseUrl}/products/category/${category}`);
    return req.data;
  } catch (exception) {
    console.error(exception);
  }
};

// Get single item from ID
const getItemById = async id => {
  try {
    const req = await axios.get(`${baseUrl}/products?id=${id}`);
    return req.data[0];
  } catch (exception) {
    console.error(exception);
  }
};

// Returns three suggested items
const getSuggestedItems = async (category, currentItemId) => {
  try {
    const req = await axios.get(
      `${baseUrl}/products/suggested?category=${category}&itemId=${currentItemId}`
    );
    return req.data;
  } catch (exception) {
    console.error(exception);
  }
};

const apiService = {
  getAllFromCategory,
  getItemById,
  getSuggestedItems
};

export default apiService;

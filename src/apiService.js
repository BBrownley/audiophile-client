import axios from "axios";

require("dotenv").config();

const production = true;

// const baseUrl = "http://localhost:1337"; // local backend

const baseUrl = process.env.REACT_APP_BACKEND_URL;

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
  getSuggestedItems,
  baseUrl
};

export default apiService;

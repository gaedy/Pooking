import axios from "axios";
import { reviewsData } from "./reviews/reviews";

const BASE_URL = "http://localhost:8000";

function fetchApi(apiData, delay = 800) {
  return new Promise((resolve, reject) => {
    if (!apiData) {
      reject(new Error("Data not found or invalid!"));
    } else {
      setTimeout(() => resolve(apiData), delay);
    }
  }).catch((error) => {
    console.warn("Warning:", error.message);
  });
}

export const fetchReviews = () => fetchApi(reviewsData);

export const getRentJSON = async () => {
  const response = await axios.get(`${BASE_URL}/rent`);
  return response.data;
};

export const getBuyJSON = async () => {
  const response = await axios.get(`${BASE_URL}/buy`);

  return response.data;
};

export const getSellJSON = async () => {
  const response = await axios.get(`${BASE_URL}/sell`);

  return response.data;
};

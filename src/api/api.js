import axios from "axios";

const BASE_URL = "http://localhost:8000";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const delayAmount = 800;

export const getRentJSON = async () => {
  if (delayAmount) await delay(delayAmount);
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

export const getReviewsJSON = async () => {
  if (delayAmount) await delay(delayAmount);
  const response = await axios.get(`${BASE_URL}/reviews`);
  return response.data;
};

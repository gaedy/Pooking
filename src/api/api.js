// import axios from "axios";
import rentData from '/data/db.json';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const delayAmount = 800;

// Simulating API calls by returning promises
export const getRentJSON = async () => {
  if (delayAmount) await delay(delayAmount);
  return rentData.rent;
};

export const getBuyJSON = async () => {
  if (delayAmount) await delay(delayAmount);
  return rentData.buy;
};

export const getSellJSON = async () => {
  if (delayAmount) await delay(delayAmount);
  return rentData.sell;
};

export const getReviewsJSON = async () => {
  if (delayAmount) await delay(delayAmount);
  return rentData.reviews;
};
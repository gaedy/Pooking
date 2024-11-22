import { buyCardsData } from "./cards/buyCardsData";
import { rentCardsData } from "./cards/rentCardsData";
import { sellCardsData } from "./cards/sellCardsData";
import { reviewsData } from "./reviews/reviews";
import { savedCardsData } from "./savedCards/savedCards";

function fetchApi(apiData, delay = 800) {
    return new Promise((resolve, reject) => {
      if (!apiData) {
        reject(new Error('Data not found or invalid!'));
      } else {
        setTimeout(() => resolve(apiData), delay);
      }
    })
    .catch(error => {
      console.warn('Warning:', error.message);
    });
}


export const fetchBuyCards = () => fetchApi(buyCardsData);
export const fetchRentCards = () => fetchApi(rentCardsData);
export const fetchSellCards = () => fetchApi(sellCardsData);


export const fetchReviews = () => fetchApi(reviewsData);

export const fetchSavedCards = () => fetchApi(savedCardsData);
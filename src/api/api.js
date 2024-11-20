import { buyCardsData } from "./cards/buyCardsData";
import { rentCardsData } from "./cards/rentCardsData";
import { sellCardsData } from "./cards/sellCardsData";
import { reviewsData } from "./reviews/reviews";

function fetchApi(apiData, delay = 800) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(apiData), delay);
    })

}

export const fetchBuyCards = () => fetchApi(buyCardsData);
export const fetchRentCards = () => fetchApi(rentCardsData);
export const fetchSellCards = () => fetchApi(sellCardsData);


export const fetchReviews = () => fetchApi(reviewsData);
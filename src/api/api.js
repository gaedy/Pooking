import { buyCardsData } from "./cards/buyCardsData";
import { rentCardsData } from "./cards/rentCardsData";
import { sellCardsData } from "./cards/sellCardsData";

function fetchApi(apiData, delay = 800) {
    return new Promise((data) => {
        setTimeout(() => data(apiData), delay);
    })

}

export const fetchBuyCards = () => fetchApi(buyCardsData);
export const fetchRentCards = () => fetchApi(rentCardsData);
export const fetchSellCards = () => fetchApi(sellCardsData);
import { buyCardsData } from "./cards/buyCardsData";
import { rentCardsData } from "./cards/rentCardsData";
import { sellCardsData } from "./cards/sellCardsData";

function fetchApi(apiData, delay = 800) {
    return new Promise((data) => {
        setTimeout(() => data(apiData), delay);
    })

}

export function fetchBuyCards() {
    return fetchApi(buyCardsData);
}

export function fetchRentCards() {
    return fetchApi(rentCardsData);
}


export function fetchSellCards() {
    return fetchApi(sellCardsData);
}


import { rentCardsData } from "../api/cards/rentCardsData";

export const filterCardsByTitle = (searchKey) => {

    return rentCardsData.filter( card => {
        card.title.toLowerCase().includes(searchKey.toLowerCase());
    });
}


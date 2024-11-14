import { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import { fetchBuyCards, fetchRentCards, fetchSellCards } from "../../api/api";
import { Outlet } from "react-router-dom";
import { LoaderIcon } from "lucide-react";
import {
  searchFilterByGuests,
  searchFilterByRate,
  searchFilterByTitle,
} from "../../utils/filter";
import { rentCardsData } from "../../api/cards/rentCardsData";
import { buyCardsData } from "../../api/cards/buyCardsData";
import { sellCardsData } from "../../api/cards/sellCardsData";

function CardsPage() {
  const [theCards, setTheRentCards] = useState([]);
  const [theBuyCards, setTheBuyCards] = useState([]);
  const [theSellCards, setTheSellCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [rateTerm, setRateTerm] = useState(0);
  const [guestNmuber, setguestNmuber] = useState(0);

  useEffect(() => {
    Promise.all([fetchRentCards(), fetchBuyCards(), fetchSellCards()])
      .then(([rentCardsData, buyCardsData, sellCardsData]) => {
        setTheRentCards(rentCardsData);
        setTheBuyCards(buyCardsData);
        setTheSellCards(sellCardsData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filteredRentCards = searchFilterByTitle(searchTerm, rentCardsData);
  const filteredBuyCards = searchFilterByTitle(searchTerm, buyCardsData);
  const filteredSellCards = searchFilterByTitle(searchTerm, sellCardsData);

  return (
    <>
      <div className="w-full h-full py-10 flex flex-col gap-4">
        <Searchbar setSearchTerm={setSearchTerm} />

        {isLoading ? (
          <div className="flex justify-center h-screen">
            <LoaderIcon className="animate-spin" />
          </div>
        ) : (
          <>
            <Outlet
              context={{
                rentCardsData: filteredRentCards,
                buyCardsData: filteredBuyCards,
                sellCardsData: filteredSellCards,
              }}
            />
          </>
        )}
      </div>
    </>
  );
}

export default CardsPage;

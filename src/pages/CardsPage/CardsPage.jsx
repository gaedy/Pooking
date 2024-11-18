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
  const [theRentCards, setTheRentCards] = useState([]);
  const [theBuyCards, setTheBuyCards] = useState([]);
  const [theSellCards, setTheSellCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [rateTerm, setRateTerm] = useState(0);
  const [guestNmuber, setGuestNmuber] = useState(0);

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

  // return filtered Rent cards
  const filteredRentCards = searchFilterByGuests(
    guestNmuber,
    searchFilterByRate(rateTerm, searchFilterByTitle(searchTerm, rentCardsData))
  );

  // return filtered Buy cards
  const filteredBuyCards = searchFilterByGuests(
    guestNmuber,
    searchFilterByRate(rateTerm, searchFilterByTitle(searchTerm, buyCardsData))
  );

  // return filtered Sell cards
  const filteredSellCards = searchFilterByGuests(
    guestNmuber,
    searchFilterByTitle(searchTerm, sellCardsData)
  );

  return (
    <>
      <div className="w-full h-full py-10 flex flex-col gap-4">
        <Searchbar
          setSearchTerm={setSearchTerm}
          setGuestNmuber={setGuestNmuber}
        />

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

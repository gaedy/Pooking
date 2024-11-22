import { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import { fetchBuyCards, fetchRentCards, fetchSellCards } from "../../api/api";
import { Outlet } from "react-router-dom";
import {
  searchFilterByGuests,
  searchFilterByRate,
  searchFilterByTitle,
} from "../../utils/filter";
import LoadingSpin from "../../components/LoadingSpin/LoadingSpin";


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
    searchFilterByRate(rateTerm, searchFilterByTitle(searchTerm, theRentCards))
  );

  // return filtered Buy cards
  const filteredBuyCards = searchFilterByGuests(
    guestNmuber,
    searchFilterByRate(rateTerm, searchFilterByTitle(searchTerm, theBuyCards))
  );

  // return filtered Sell cards
  const filteredSellCards = searchFilterByGuests(
    guestNmuber,
    searchFilterByTitle(searchTerm, theSellCards)
  );

  return (
    <>
      <div className="w-full h-full py-4 gap-6 flex flex-col">
        <Searchbar
          setSearchTerm={setSearchTerm}
          setGuestNmuber={setGuestNmuber}
        />

        {isLoading ? (
          <LoadingSpin className="h-screen" />
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

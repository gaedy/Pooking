import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { fetchBuyCards, fetchRentCards, fetchSellCards } from "../../api/api";
import { LoaderIcon } from "lucide-react";

function OultetFetch() {
  const [theBuyCards, setTheBuyCards] = useState([]);
  const [theSellCards, setTheSellCards] = useState([]);
  const [theCards, setTheCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    Promise.all([fetchRentCards(), fetchBuyCards(), fetchSellCards()])
      .then(([buyCardsData, sellCardsData, cardsData]) => {
        setTheBuyCards(buyCardsData);
        setTheSellCards(sellCardsData);
        setTheCards(cardsData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);


  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-screen">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <Outlet context={{ theCards, theBuyCards, theSellCards }} />
        </>
      )}
    </>
  );
}

export default OultetFetch;

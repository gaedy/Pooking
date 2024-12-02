import { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
// import { fetchBuyCards, fetchRentCards, fetchSellCards } from "../../api/api";
import { Outlet } from "react-router-dom";
import {
  searchFilterByGuests,
  searchFilterByLocation,
  searchFilterByRating,
  searchFilterByTitle,
} from "../../utils/filter";
import LoadingSpin from "../../components/LoadingSpin/LoadingSpin";
import { useDispatch, useSelector } from "react-redux";
import {
  getBuyCards,
  getRentCards,
  getSellCards,
} from "../../features/cards/cardsFetchSlice";
import Sorting from "../../components/Sorting/Sorting";
import useNiceAnimation from "../../hooks/useNiceAnimation";
import { animated, useSpring } from "@react-spring/web";
import useDataFetch from "../../hooks/useDataFetch";

function CardsPage() {
  // const [theRentCards, setTheRentCards] = useState([]);
  // const [theBuyCards, setTheBuyCards] = useState([]);
  // const [theSellCards, setTheSellCards] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [rateTerm, setRateTerm] = useState(0);
  const [guestNumber, setGuestNumber] = useState(0);
  const [locationTerm, setLocationTerm] = useState("");

  const { rentCards, buyCards, sellCards, isLoading, hasFailed } =
    useDataFetch();

  const filteredRentCards = searchFilterByGuests(
    guestNumber,
    searchFilterByTitle(
      searchTerm,
      searchFilterByLocation(
        locationTerm,
        searchFilterByRating(rateTerm, rentCards)
      )
    )
  );

  const filteredBuyCards = searchFilterByGuests(
    guestNumber,
    searchFilterByTitle(
      searchTerm,
      searchFilterByLocation(
        locationTerm,
        searchFilterByRating(rateTerm, buyCards)
      )
    )
  );

  const filteredSellCards = searchFilterByGuests(
    guestNumber,
    searchFilterByTitle(
      searchTerm,
      searchFilterByLocation(locationTerm, sellCards)
    )
  );

  const s = useSpring({
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0 },
    delay: 100,
    config: { mass: 1, tension: 210, friction: 14 },
  });

  return (
    <>
      <animated.div
        style={s}
        className="w-full h-full py-4 gap-4 items-center flex flex-col"
      >
        <Searchbar
          setSearchTerm={setSearchTerm}
          setGuestNumber={setGuestNumber}
          setLocationTerm={setLocationTerm}
        />

        <div className="max-w-screen-xl w-full px-10 left-1/2">
          <Sorting setRatingTerm={setRateTerm} />
        </div>

        {isLoading ? (
          <LoadingSpin className="h-screen" />
        ) : hasFailed ? (
          <>
            <p>Error</p>
          </>
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

        {/* {isLoading ? (
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
        )} */}
      </animated.div>
    </>
  );
}

export default CardsPage;

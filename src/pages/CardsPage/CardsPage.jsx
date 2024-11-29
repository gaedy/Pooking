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

function CardsPage() {
  // const [theRentCards, setTheRentCards] = useState([]);
  // const [theBuyCards, setTheBuyCards] = useState([]);
  // const [theSellCards, setTheSellCards] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [rateTerm, setRateTerm] = useState(0);
  const [guestNumber, setGuestNumber] = useState(0);
  const [locationTerm, setLocationTerm] = useState("");

  const dispatch = useDispatch();

  const { rentCards, buyCards, sellCards, status, error } = useSelector(
    (state) => ({
      rentCards: state.cards.rentCards,
      buyCards: state.cards.buyCards,
      sellCards: state.cards.sellCards,
      status: {
        rent: state.cards.status.rent,
        buy: state.cards.status.buy,
        sell: state.cards.status.sell,
      },
      error: state.cards.error,
    })
  );

  useEffect(() => {
    if (status.rent === "idle") dispatch(getRentCards());
    if (status.buy === "idle") dispatch(getBuyCards());
    if (status.sell === "idle") dispatch(getSellCards());
  }, [status, dispatch]);

  const isLoading =
    status.rent === "loading" ||
    status.buy === "loading" ||
    status.sell === "loading";

  const hasFailed =
    status.rent === "failed" ||
    status.buy === "failed" ||
    status.sell === "failed";

  // useEffect(() => {
  //   Promise.all([fetchRentCards(), fetchBuyCards(), fetchSellCards()])
  //     .then(([rentCardsData, buyCardsData, sellCardsData]) => {
  //       setTheRentCards(rentCardsData);
  //       setTheBuyCards(buyCardsData);
  //       setTheSellCards(sellCardsData);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

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
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0 },
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

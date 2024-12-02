import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBuyCards,
  getRentCards,
  getSellCards,
} from "../features/cards/cardsFetchSlice";

const useDataFetch = () => {
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

  return {
    rentCards,
    buyCards,
    sellCards,
    isLoading,
    hasFailed,
    error,
  };
};

export default useDataFetch;

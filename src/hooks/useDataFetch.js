import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBuyThunk,
  getRentThunk,
  getSellThunk,
} from "../features/cards/fetchingSlice";

const useDataFetch = () => {
  const dispatch = useDispatch();

  const { rentCards, buyCards, sellCards, status, error } = useSelector(
    (state) => state.cards
  );

  useEffect(() => {
    if (status.rent === "idle") dispatch(getRentThunk());
    if (status.buy === "idle") dispatch(getBuyThunk());
    if (status.sell === "idle") dispatch(getSellThunk());
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

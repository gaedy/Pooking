import { useDispatch, useSelector } from "react-redux";
import {
  setCurrency,
  toggleCurrency,
} from "../features/currency/currencySlice";

const useCurrency = () => {
  const selectedCurrency = useSelector((state) => state.currency.currency);

  const dispatch = useDispatch();

  const toggleCurrencyHandler = () => {
    dispatch(toggleCurrency());
  };

  const setCurrencyHandler = (currency) => {
    dispatch(setCurrency(currency));
  };

  const isEGPCurrency = selectedCurrency === "EGP";
  const isEURCurrency = selectedCurrency === "EUR";
  const isDefaultCurrency = !isEGPCurrency && !isEURCurrency;

  return {
    toggleCurrencyHandler,
    setCurrencyHandler,
    isEGPCurrency,
    isEURCurrency,
    isDefaultCurrency,
    selectedCurrency,
  };
};

export default useCurrency;

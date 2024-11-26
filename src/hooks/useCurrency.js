import { useDispatch, useSelector } from "react-redux";
import {
  setCurrency,
  toggleCurrency,
} from "../features/currency/currencySlice";

const useCurrency = () => {
  const isEGPCurrency = useSelector((state) => state.currency.currency);

  const dispatch = useDispatch();

  const toggleEGPCurrency = () => {
    dispatch(toggleCurrency());
  };
  const setEGPCurrency = (newValue) => {
    dispatch(setCurrency(newValue));
  };

  return { toggleEGPCurrency, setEGPCurrency, isEGPCurrency };
};

export default useCurrency;

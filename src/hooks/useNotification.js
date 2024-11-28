import { useCallback, useState } from "react";

export const useNotification = (initialState = false) => {
  const [isNotification, setIsNotification] = useState(initialState);

  const handleNotification = useCallback((duration = 4000) => {
    setIsNotification(true);

    const timeOut = setTimeout(() => {
      setIsNotification(false);
    }, duration);

    return () => clearTimeout(timeOut);
  }, []);

  return {
    isNotification,
    handleNotification,
    setIsNotification,
  };
};

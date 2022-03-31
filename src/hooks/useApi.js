import { useState, useCallback } from "react";

export const useApi = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (response.status !== 200)
        throw new Error("Wasn't able to fetch data.");

      const data = await response.json();

      if (!data || data?.length === 0) throw new Error("No data found.");

      setIsLoading(false);

      return data;
    } catch (err) {
      console.error(err);
      setIsLoading(false);

      setError(err.message || "Something went wrong!");
    }
  }, []);

  return { isLoading, error, sendRequest };
};

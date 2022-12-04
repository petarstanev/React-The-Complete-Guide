import { useState,useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestContent,applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestContent.url, {
        method: requestContent.method ? requestContent.method : "GET",
        headers: requestContent.headers? requestContent.headers: {},
        body: requestContent.body ? JSON.stringify(requestContent.body): null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[]);

  return { isLoading, error, sendRequest};
};

export default useHttp;

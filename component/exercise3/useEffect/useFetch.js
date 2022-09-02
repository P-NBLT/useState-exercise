import { useState, useEffect } from "react";

const useFetch = (url, trigger = null) => {
  //   const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  if (trigger) {
    trigger = trigger.join(", ");
  }

  useEffect(() => {
    const AbortCont = new AbortController();
    async function fetchData() {
      try {
        setIsLoading(true);

        const response = await fetch(url, { signal: AbortCont.signal });
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (err) {
        if (err.name === "AbortError") {
        } else {
          setError(err);
          setIsLoading(false);
        }
      }
    }
    fetchData();

    return () => AbortCont.abort();
  }, [trigger]);

  return { data, isLoading, error };
};

export default useFetch;

import { useState, useEffect } from "react";

const useFetch = (url, dependencies = []) => {
  const [state, setState] = useState({
    isLoading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    const AbortCont = new AbortController();
    async function fetchData() {
      try {
        setState({ ...state, isLoading: true, error: null });

        const response = await fetch(url, { signal: AbortCont.signal });
        const json = await response.json();

        setState({ ...state, data: json, isLoading: false });
      } catch (err) {
        if (err.name === "AbortError") {
        } else {
          setState({ ...state, error: err, isLoading: false });
        }
      }
    }
    fetchData();

    return () => AbortCont.abort();
  }, dependencies);

  return state;
};

export default useFetch;

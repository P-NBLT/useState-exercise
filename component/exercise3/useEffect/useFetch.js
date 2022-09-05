import { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "REQUEST_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "REQUEST_LOADING":
      return { ...state, error: null, isLoading: true };
    case "REQUEST_DATA":
      return { ...state, data: action.payload, isLoading: false, error: null };
    default:
      return state;
  }
}
const initialState = {
  isLoading: true,
  error: null,
  data: null,
};

const useFetch = (url, dependencies = []) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const AbortCont = new AbortController();
    async function fetchData() {
      try {
        dispatch({ type: "REQUEST_LOADING" });

        const response = await fetch(url, { signal: AbortCont.signal });
        const json = await response.json();
        console.log(json);
        dispatch({ type: "REQUEST_DATA", payload: json });
      } catch (err) {
        if (err.name === "AbortError") {
          dispatch({
            type: "REQUEST_ERROR",
            payload: "you are clicking to fast",
          });
        } else {
          dispatch({ type: "REQUEST_ERROR", payload: err });
        }
      }
    }
    fetchData();

    return () => AbortCont.abort();
  }, dependencies);

  return state;
};

export default useFetch;

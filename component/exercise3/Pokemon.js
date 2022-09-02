import React, { useState } from "react";
import PropTypes from "prop-types";
import FetchContent from "./useEffect/FetchContent";
import { Pagination } from "../exercise2";

const Pokemon = (props) => {
  const [activePage, setActivePage] = useState(1);
  const [lastPage, setLastPage] = useState(12);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://pokeapi.co/api/v2/pokemon/?limit=100&offset=${
    (activePage - 1) * 100
  }`;

  console.log("data :", data);
  console.log(error);

  return (
    <div>
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        lastPage={lastPage}
      />
      <FetchContent
        activePage={activePage}
        fun={{ setData, setError, setIsLoading }}
        data={data}
        url={url}
      />
      {error ? (
        <p>Something went wrong</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        data.results.map((el) => <p key={el.name}>{el.name}</p>)
      )}

      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        lastPage={lastPage}
      />
    </div>
  );
};

Pokemon.propTypes = {};

export default Pokemon;

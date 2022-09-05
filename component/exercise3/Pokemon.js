import React, { useState } from "react";
import PropTypes from "prop-types";

import { Pagination } from "../exercise2";
import useFetch from "./useEffect/useFetch";

const Pokemon = (props) => {
  const [activePage, setActivePage] = useState(1);
  const [lastPage, setLastPage] = useState(12);

  const url = `https://deelay.me/800/https://pokeapi.co/api/v2/pokemon/?limit=100&offset=${
    (activePage - 1) * 100
  }`;

  const { data, isLoading, error } = useFetch(url, [activePage]);

  return (
    <div>
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        lastPage={lastPage}
      />
      {error ? (
        <p>{error}</p>
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

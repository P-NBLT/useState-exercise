import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePlayers, useFilter } from "../GameContext/GameContext";

const Scoreboard = (props) => {
  const players = usePlayers();
  const filter = useFilter();

  function setDecrement(e) {
    players.decrement(e.target.id);
  }
  function setIncrement(e) {
    players.increment(e.target.id);
  }

  function getFilter(e) {
    let option = e.target.value;
    filter.setFilterOption(option);
    players.orderList(option);
  }

  return (
    <div className="scoreboard">
      <form>
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" name="filter" onChange={getFilter}>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </form>
      {players.players.map((el, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            rowGap: "40px",
            columnGap: "20px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "green",
            margin: "20px 0 20px 0",
            width: "200px",
          }}
        >
          <p>{el.name}</p>
          <button
            style={{ width: "20px", height: "20px" }}
            onClick={setDecrement}
            id={el.id}
          >
            -
          </button>
          <p>{el.score}</p>
          <button
            style={{ width: "20px", height: "20px" }}
            onClick={setIncrement}
            id={el.id}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
};

Scoreboard.propTypes = {};

export default Scoreboard;

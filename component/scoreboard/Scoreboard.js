import React, { useState } from "react";
import PropTypes from "prop-types";

const Scoreboard = (props) => {
  console.log(props.pool);
  const names = props.pool.map((el) => el.name);
  const score = props.pool.map((el) => el.score);
  function setDecrement(e) {
    props.fun.decrement(e.target.id);
  }
  function setIncrement(e) {
    props.fun.increment(e.target.id);
  }

  function getFilter(e) {
    let option = e.target.value;
    props.fun.orderList(option);
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
      {names.map((el, idx) => (
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
          <p>{el}</p>
          <button
            style={{ width: "20px", height: "20px" }}
            onClick={setDecrement}
            id={idx}
          >
            -
          </button>
          <p>{score[idx]}</p>
          <button
            style={{ width: "20px", height: "20px" }}
            onClick={setIncrement}
            id={idx}
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

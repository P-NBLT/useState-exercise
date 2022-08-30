import React, { useState } from "react";
import PropTypes from "prop-types";

const Scoreboard = (props) => {
  const names = ["Rein", "Maylis", "Gerrit"];
  const [score, setScore] = useState(() => Array(names.length).fill(0));

  const decrement = (e) => {
    const copy = [...score];
    copy[e.target.id]--;
    return setScore(copy);
  };
  const increment = (e) => {
    const copy = [...score];
    copy[e.target.id]++;
    return setScore(copy);
  };

  return (
    <div className="scoreboard">
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
            onClick={decrement}
            id={idx}
          >
            -
          </button>
          <p>{score[idx]}</p>
          <button
            style={{ width: "20px", height: "20px" }}
            onClick={increment}
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

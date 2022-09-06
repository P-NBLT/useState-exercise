import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePlayers, useFilter } from "../GameContext/GameContext";

const InputPlayer = (props) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const players = usePlayers();
  const filter = useFilter();

  const getName = (e) => {
    setName(e.target.value);
  };
  const getScore = (e) => {
    setScore(e.target.value);
  };

  function addPlayer(e) {
    e.preventDefault();
    players.addNewPlayer(name, Number(score));
    players.orderList(filter.filterOption);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="playerName"
          id="name"
          onChange={getName}
        ></input>
        <input
          type="text"
          placeholder="Score"
          id="score"
          onChange={getScore}
        ></input>
        <button onClick={addPlayer}>Add Player</button>
      </form>
    </div>
  );
};

InputPlayer.propTypes = {};

export default InputPlayer;

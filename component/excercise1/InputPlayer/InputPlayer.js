import React, { useState } from "react";
import PropTypes from "prop-types";

const InputPlayer = (props) => {
  function addPlayer(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const score = document.getElementById("score").value;

    props.fun.addNewPlayer(name, score);

    document.getElementById("name").value = "";
    document.getElementById("score").value = "";
  }
  return (
    <div>
      <form>
        <input type="text" placeholder="playerName" id="name"></input>
        <input type="text" placeholder="Score" id="score"></input>
        <button onClick={addPlayer}>Add Player</button>
      </form>
    </div>
  );
};

InputPlayer.propTypes = {};

export default InputPlayer;

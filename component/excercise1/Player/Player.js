import React, { useState } from "react";
import PropTypes from "prop-types";
import { Scoreboard, InputPlayer } from "../../index";
import { usePlayers, useFilter } from "../GameContext/GameContext";

function Player(props) {
  return (
    <div>
      <InputPlayer />
      <Scoreboard />
    </div>
  );
}

Player.propTypes = {};

export default Player;

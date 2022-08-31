import React, { useState } from "react";
import PropTypes from "prop-types";
import { Scoreboard, InputPlayer } from "../../index";

function Player(props) {
  const [player, setPlayer] = useState(
    [
      { name: "Rein", score: 6 },
      { name: "Pierre", score: 4 },
      { name: "Bob", score: 12 },
    ].sort((a, b) => b.score - a.score)
  );

  const orderList = (option) => {
    console.log("option is ", option);
    if (option === "asc") {
      return setPlayer((current) => {
        return [...current.sort((a, b) => b.score - a.score)];
      });
    } else
      return setPlayer((current) => {
        return [...current.sort((a, b) => a.score - b.score)];
      });
  };

  const addNewPlayer = (name, score) => {
    return setPlayer((current) => {
      return [...current, { name, score }];
    });
  };
  console.log(player);
  const decrement = (id) => {
    let newScore = [...player];
    newScore[id].score -= 1;
    setPlayer(newScore);
  };
  const increment = (id) => {
    let newScore = [...player];
    newScore[id].score += 1;
    setPlayer(newScore);
  };

  return (
    <div>
      <InputPlayer fun={{ addNewPlayer }} />
      <Scoreboard pool={player} fun={{ decrement, increment, orderList }} />
    </div>
  );
}

Player.propTypes = {};

export default Player;

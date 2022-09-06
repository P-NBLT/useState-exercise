import React, { useContext, useState } from "react";

const PlayersContext = React.createContext();
const FilterContext = React.createContext();

export function usePlayers() {
  return useContext(PlayersContext);
}

export function useFilter() {
  return useContext(FilterContext);
}

function GameProvider({ children }) {
  const [players, setPlayers] = useState(
    [
      { name: "Rein", score: 6, id: 0 },
      { name: "Pierre", score: 4, id: 1 },
      { name: "Bob", score: 12, id: 2 },
    ].sort((a, b) => a.score - b.score)
  );

  const [filterOption, setFilterOption] = useState("asc");

  const orderList = (option) => {
    if (option === "asc") {
      return setPlayers((current) => {
        return [...current.sort((a, b) => a.score - b.score)];
      });
    } else if (option === "desc") {
      return setPlayers((current) => {
        return [...current.sort((a, b) => b.score - a.score)];
      });
    }
  };

  const addNewPlayer = (name, score) => {
    return setPlayers((current) => {
      return [...current, { name, score, id: current.length }];
    });
  };

  const decrement = (id) => {
    let newScore = [...players];
    let index = newScore.findIndex((el) => el.id == id);
    newScore[index].score -= 1;
    setPlayers(newScore);
    orderList(filterOption);
  };
  const increment = (id) => {
    let newScore = [...players];
    let index = newScore.findIndex((el) => el.id == id);
    // console.log("index is ", index, id);
    newScore[index].score += 1;
    setPlayers(newScore);
    orderList(filterOption);
  };

  return (
    <PlayersContext.Provider
      value={{ players, orderList, increment, decrement, addNewPlayer }}
    >
      <FilterContext.Provider value={{ filterOption, setFilterOption }}>
        {children}
      </FilterContext.Provider>
    </PlayersContext.Provider>
  );
}

export default GameProvider;

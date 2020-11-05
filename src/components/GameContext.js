import React from "react";
import usePersistedState from "../hooks/use-persisted-state.hook";
export const GameContext = React.createContext(null);

export const GameProvider = ({ children }) => {
  const [numCookies, setNumCookies] = usePersistedState(1000, "num-cookies");

  const [purchasedItems, setPurchasedItems] = usePersistedState(
    {
      cursor: 0,
      grandma: 0,
      farm: 0,
    },
    "purchased-items"
  );

  return (
    <GameContext.Provider
      value={{ numCookies, setNumCookies, purchasedItems, setPurchasedItems }}
    >
      {children}
    </GameContext.Provider>
  );
};

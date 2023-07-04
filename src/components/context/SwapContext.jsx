import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const SwapTokenContext = createContext();

export const SwapTokenProvider = ({ children }) => {
  // Use State
  const [selectChains, setSelectChains] = useState(1);
  const [showMoreNetworks, setShowMoreNetworks] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chains, setChains] = useState([]);
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    getChains();
    getTokens();
  }, []);

  const getChains = async () => {
    setLoading(true);
    await axios
      .get("https://li.quest/v1/chains")
      .then((res) => {
        // console.log(res.data.chains);
        setLoading(false);
        setChains(res.data.chains);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const getTokens = async () => {
    setLoading(true);
    await axios
      .get("https://li.quest/v1/tokens")
      .then((res) => {
        // console.log(res.data.tokens);
        setTokens(res.data.tokens);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <SwapTokenContext.Provider
      value={{
        selectChains,
        setSelectChains,
        showMoreNetworks,
        setShowMoreNetworks,
        chains,
        tokens,
        loading,
      }}
    >
      {children}
    </SwapTokenContext.Provider>
  );
};

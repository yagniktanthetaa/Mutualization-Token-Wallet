import React, { useContext } from "react";
import SwapWrapper from "../common/ui/SwapWrapper";
import Button from "../common/ui/Button/Button";
import Chains from "./Chains";
import Token from "./Token";
import { SwapTokenContext } from "../context/SwapContext";

const SelectToken = () => {
  const { selectChains, setShowMoreNetworks } = useContext(SwapTokenContext);

  const handleShowMoreNetworks = () => {
    setShowMoreNetworks((showMoreNetworks) => !showMoreNetworks);
  };

  return (
    <>
      <div className="flex-center w-full min-h-screen">
        <SwapWrapper>
          <div className="flex-between text-white font-semibold text-xl md:text-xl leading-9">
            <h1>
              <i className="fa-solid fa-arrow-left mr-6" />
              Select Input Tokens
            </h1>
            <p>5/5</p>
          </div>

          {/* Search token */}
          <div className="my-6">
            <div className="search-border w-full text-white/40 text-lg flex-between gap-2">
              <input
                type="text"
                placeholder="Search token name or address"
                className="w-full bg-inherit outline-none "
              />
              <i className="fa-solid fa-magnifying-glass" />
            </div>
          </div>

          <Chains />

          <div className="my-6">
            <div
              className="border rounded-2xl px-6 py-3 flex-center text-white text-xl font-bold leading-7"
              onClick={handleShowMoreNetworks}
            >
              <button>
                More Networks <i className="fa-solid fa-chevron-down ml-4"></i>
              </button>
            </div>
          </div>

          <Token selectChains={selectChains} />

          <div className="my-2.5">
            <Button>Add Tokens</Button>
          </div>
        </SwapWrapper>
      </div>
    </>
  );
};

export default SelectToken;

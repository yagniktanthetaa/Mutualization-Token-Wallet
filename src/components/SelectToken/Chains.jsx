import React, { useContext } from "react";
import { SwapTokenContext } from "../context/SwapContext";

export const ChainCard = (props) => {
  const { chain, index, selectChains, handleSelectToken } = props;
  return (
    <>
      <div
        className="input-token-outer-layout cursor-pointer"
        key={index}
        onClick={() => handleSelectToken(chain.id)}
      >
        <div
          className={`${
            chain.id === selectChains ? "token-active" : "input-token-border"
          }`}
        >
          <div className="flex-center flex-col">
            <img
              src={chain.logoURI}
              alt={chain.name}
              loading="lazy"
              className="h-10 w-10 object-contain rounded-full"
            />
            <p className="mt-4 text-lg font-normal leading-5 text-white">
              {chain.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Chains = () => {
  const { selectChains, setSelectChains, showMoreNetworks, chains } =
    useContext(SwapTokenContext);

  const handleSelectToken = (index) => {
    setSelectChains(index);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-y-4 gap-x-2">
        {showMoreNetworks
          ? chains.map((chain, index) => (
              <ChainCard
                chain={chain}
                index={index}
                selectChains={selectChains}
                handleSelectToken={handleSelectToken}
              />
            ))
          : chains
              .slice(0, 4)
              .map((chain, index) => (
                <ChainCard
                  chain={chain}
                  index={index}
                  selectChains={selectChains}
                  handleSelectToken={handleSelectToken}
                />
              ))}
      </div>
    </>
  );
};

export default Chains;

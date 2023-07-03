import React, { useEffect, useState } from "react";
import axios from "axios";

const Chains = ({ selectChains, setSelectChains, showMoreNetworks }) => {
  const [chains, setChains] = useState([]);

  const handleSelectToken = (index) => {
    setSelectChains(index);
  };

  useEffect(() => {
    getChains();
  }, []);

  const getChains = async () => {
    await axios
      .get("https://li.quest/v1/chains")
      .then((res) => {
        // console.log(res.data.chains);
        setChains(res.data.chains);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-y-4 gap-x-2">
        {showMoreNetworks
          ? chains.map((chain, index) => (
              <div
                className="input-token-outer-layout cursor-pointer"
                key={index}
                onClick={() => handleSelectToken(chain.id)}
              >
                <div
                  className={`${
                    chain.id === selectChains
                      ? "token-active"
                      : "input-token-border"
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
            ))
          : chains.slice(0, 4).map((chain, index) => (
              <div
                className="input-token-outer-layout cursor-pointer"
                key={index}
                onClick={() => handleSelectToken(chain.id)}
              >
                <div
                  className={`${
                    chain.id === selectChains
                      ? "token-active"
                      : "input-token-border"
                  }`}
                >
                  <div className="flex-center flex-col">
                    <img
                      src={chain.logoURI}
                      alt={chain.name}
                      className="h-10 w-10 object-contain rounded-full"
                    />
                    <p className="mt-4 text-lg font-normal leading-5 text-white">
                      {chain.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Chains;

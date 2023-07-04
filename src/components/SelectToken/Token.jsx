import React, { useContext, useState } from "react";
import { replaceIpfsUrl } from "../common/utils/utility";
import { SwapTokenContext } from "../context/SwapContext";

const Token = () => {
  const { selectChains, tokens } = useContext(SwapTokenContext);

  const [selectToken, setSelectToken] = useState("");

  const handleSelectToken = (token) => setSelectToken(token);

  return (
    <>
      <div className="w-full input-token-scroll max-h-72 overflow-y-scroll">
        {tokens?.[selectChains]?.map((token, index) => (
          <div
            key={index}
            className={`${
              selectToken === token.address ? "token-active" : ""
            } token-chains mr-3 px-4 py-3 my-2.5 cursor-pointer`}
            onClick={() => handleSelectToken(token.address)}
          >
            <div className="flex-between gap-6">
              <div className="flex-center gap-10">
                <div className="relative">
                  <img
                    src={
                      token.logoURI?.toString()?.startsWith("ipfs")
                        ? replaceIpfsUrl(token.logoURI)
                        : token.logoURI
                    }
                    loading="lazy"
                    alt={token.name}
                    className="w-12 h-12 rounded-full object-contain"
                  />
                  <div className="w-8 h-8 bg-white rounded-full flex-center absolute bottom-0 -right-3 top-6">
                    <img
                      src={
                        token.logoURI?.toString()?.startsWith("ipfs")
                          ? replaceIpfsUrl(token.logoURI)
                          : token.logoURI
                      }
                      alt={token.name}
                      loading="lazy"
                      className="p-1" // w-5 h-5 object-contain
                    />
                  </div>
                </div>
                <div className="text-white">
                  <p className="text-2xl font-semibold leading-8">
                    {token.symbol}
                  </p>
                  <p className="text-lg  font-normal">{token.name}</p>
                </div>
              </div>
              {token.address === selectToken && (
                <div className="w-8 h-8 rounded-full bg-[#AC8BDA] flex-center text-white text-base">
                  <i className="fa-solid fa-check"></i>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Token;

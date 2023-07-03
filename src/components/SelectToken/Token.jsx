import axios from "axios";
import React, { useEffect, useState } from "react";

export const replaceIpfsUrl = (data) => {
  if (data) {
    return data.replace("ipfs://", "https://ipfs.io/ipfs/");
  } else {
    return data;
  }
};

const Token = ({ selectChains }) => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    getTokens();
  }, []);

  const getTokens = async () => {
    await axios
      .get("https://li.quest/v1/tokens")
      .then((res) => {
        // console.log(res.data.tokens);
        setTokens(res.data.tokens);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="w-full input-token-scroll max-h-72 overflow-y-scroll">
        {tokens?.[selectChains]?.map((token, index) => (
          <div
            key={index}
            className="token-chains mr-3  token-active px-4 py-3 my-2.5 cursor-pointer"
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
              <div className="w-8 h-8 rounded-full bg-[#AC8BDA] flex-center text-white text-base">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Token;

import React, { useState } from "react";
import EthereumBigLogo from "./../../assets/images/ethereum_big_logo.png";
import EthereumSmallLogo from "./../../assets/images/ethereum_small_logo.png";
import BinanceLogo from "./../../assets/images/binance_logo.png";
import SwapWrapper from "../common/ui/SwapWrapper";
import Button from "../common/ui/Button/Button";

const AddTokensButton = ({ onClick }) => {
  return (
    <button className="add-token-button" onClick={onClick}>
      + Add tokens
    </button>
  );
};

const Home = () => {
  const [active, setActive] = useState("Mainnet");

  const handleActive = (name) => {
    setActive(name);
  };

  const networkItem = [
    { id: 1, name: "Mainnet" },
    { id: 2, name: "Testnet" },
  ];

  const networkItemList = networkItem.map((networkItem) => (
    <p
      key={networkItem.id}
      className={` py-1 px-3 text-base font-semibold cursor-pointer ${
        active === networkItem.name
          ? "text-[#1D1D1D] bg-white rounded-xl transition-all ease-in-out duration-300"
          : "text-white"
      }`}
      onClick={() => handleActive(`${networkItem.name}`)}
    >
      {networkItem.name}
    </p>
  ));

  const swapNetwork = () => {
    return (
      <div
        className="flex-center gap-3 p-1 rounded-2xl"
        style={{ border: "1px solid rgba(255, 255, 255, 0.15)" }}
      >
        {networkItemList}
      </div>
    );
  };

  return (
    <>
      <div className="flex-center w-full min-h-screen">
        <SwapWrapper>
          <div className="flex-between">
            <h1 className="text-white font-semibold text-xl md:text-2xl leading-9">
              Swap
            </h1>
            {swapNetwork()}
          </div>

          <div className="mt-6">
            <h2 className="text-white font-semibold text-xl">You Pay</h2>
            <div className="my-2">
              <div className="box-inner-layout">
                <div className="text-white font-semibold text-xl box-border-layout">
                  <div className="flex-center  md:gap-16">
                    <div className="flex-center gap-[17.4px] md:gap-10">
                      <div className="relative">
                        <img
                          src={EthereumBigLogo}
                          alt="EthereumBigLogo"
                          className="w-12 h-12 object-contain"
                        />
                        <div className="w-8 h-8 bg-white rounded-full flex-center absolute bottom-0 -right-3 top-6">
                          <img
                            src={EthereumSmallLogo}
                            alt="EthereumSmallLogo"
                            className="p-1" // w-5 h-5 object-contain
                          />
                        </div>
                      </div>
                      <div>
                        <p>ETH</p>
                        <p className="text-base font-normal">Balance: 0.0</p>
                      </div>
                    </div>
                    <p>
                      <i className="fa-solid fa-chevron-down" />
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-white font-semibold text-xl box-border-layout">
                  <p>1</p>
                  <p className="text-[#A5A0AA] font-normal text-base">
                    ~$ 1,731.87
                  </p>
                </div>
              </div>
            </div>
            <AddTokensButton />
          </div>

          <div className="my-4 flex-center ">
            <div className="bg-white/10 flex-center w-10 h-10 p-2 rounded-full text-white font-normal text-2xl">
              <i className="fa-solid fa-arrow-down " />
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-white font-semibold text-xl">You Receive</h2>
            <div className="my-2">
              <div className="box-inner-layout">
                <div className="text-white font-semibold text-xl box-border-layout">
                  <div className="flex-center md:gap-16">
                    <div className="flex-center gap-[17.4px] md:gap-10">
                      <div className="relative">
                        <img
                          src={BinanceLogo}
                          alt="BinanceLogo"
                          className="w-12 h-12 object-contain"
                        />
                        <div className="w-8 h-8 bg-white rounded-full flex-center absolute bottom-0 -right-3 top-6">
                          <img
                            src={BinanceLogo}
                            alt="BinanceLogo"
                            className="p-1" // w-5 h-5 object-contain
                          />
                        </div>
                      </div>
                      <div>
                        <p>BNB</p>
                        <p className="text-base font-normal">Balance: 0.0</p>
                      </div>
                    </div>
                    <p>
                      <i className="fa-solid fa-chevron-down" />
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-white font-semibold text-xl box-border-layout">
                  <p>1</p>
                  <p className="text-[#A5A0AA] font-normal text-base">
                    ~$ 1,731.87
                  </p>
                </div>
              </div>
            </div>
            <AddTokensButton />
          </div>

          <Button>Find Routes</Button>

          <div className="my-4">
            <div className="flex-between text-base text-white font-normal leading-5">
              <div>
                <p>Best price</p>
                <p>Gas estimate</p>
                <p>Min. received</p>
                <p>Slippage</p>
                <p>Service cost</p>
              </div>
              <div className="flex flex-col items-end">
                <p>1 BTT = 0.0000000002677 ETH</p>
                <p>0.36 $</p>
                <p>1 710.2226 $</p>
                <p>0.005 %</p>
                <p>0.400376 $</p>
              </div>
            </div>
          </div>

          <p className="flex-center text-xl leading-6 text-[#FD5555]">
            You are not connected with wallet
          </p>
        </SwapWrapper>
      </div>
    </>
  );
};

export default Home;

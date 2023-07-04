import React from "react";

const SwapNetwork = ({ active, onNetworkChange }) => {
  const NETWORK_OPTIONS = [
    { id: 1, name: "Mainnet" },
    { id: 2, name: "Testnet" },
  ];
  return (
    <>
      <div
        className="flex-center gap-3 p-1 rounded-2xl"
        style={{ border: "1px solid rgba(255, 255, 255, 0.15)" }}
      >
        {NETWORK_OPTIONS.map((networkItem) => (
          <p
            key={networkItem.id}
            className={`py-1 px-3 text-base font-semibold cursor-pointer ${
              active === networkItem.name
                ? "text-[#1D1D1D] bg-white rounded-xl transition-all ease-in-out duration-300"
                : "text-white"
            }`}
            onClick={() => onNetworkChange(networkItem.name)}
          >
            {networkItem.name}
          </p>
        ))}
      </div>
    </>
  );
};

export default SwapNetwork;

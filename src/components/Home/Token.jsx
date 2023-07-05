import React from "react";

const Token = ({ token, onRemoveToken, onEditToken, length, id }) => {
  return (
    <>
      <div className="my-2 relative" key={id}>
        <div className="box-inner-layout">
          <div className="text-white font-semibold text-xl box-border-layout">
            <div className="flex-center  md:gap-16">
              <div className="flex-center gap-[17.4px] md:gap-10">
                <div className="relative">
                  <img
                    src={token.image}
                    alt={token.image}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="w-8 h-8 bg-white rounded-full flex-center absolute bottom-0 -right-3 top-6">
                    <img
                      src={token.image}
                      alt={token.image}
                      className="p-1" // w-5 h-5 object-contain
                    />
                  </div>
                </div>
                <div>
                  <p>{token.title}</p>
                  <p className="text-base font-normal">
                    Balance: {token.balance}
                  </p>
                </div>
              </div>
              <p onClick={onEditToken}>
                <i className="fa-solid fa-chevron-down" />
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end text-white font-semibold text-xl box-border-layout">
            <p>{token.inputPrice}</p>
            <p className="text-[#A5A0AA] font-normal text-base">
              {token.estimate}
            </p>
          </div>
        </div>
        {length === 1 ? (
          ""
        ) : (
          <div className="absolute top-[34px] -right-2">
            <button
              onClick={onRemoveToken}
              className="close-button w-6 h-6 text-sm text-white flex-center"
            >
              <i className="fa-solid fa-x" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Token;

import React from "react";

const SwapWrapper = ({ children, className }) => {
  return (
    <>
      <div className={`box-model-layout w-full md:max-w-lg ${className}`}>
        {children}
      </div>
    </>
  );
};

export default SwapWrapper;

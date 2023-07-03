import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <>
      <div className="box-inner-layout" onClick={onClick}>
        <button
          className={`rounded-2xl py-3 text-white font-bold text-xl bg-[#AC8BDA] w-full ${className}`}
        >
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;

import React from "react";
import NavbarLogo from "./../../assets/images/navbar-full-logo.svg";

const Navbar = () => {
  const navbarItem = [
    { id: 1, name: "Swap", path: "/swap" },
    { id: 2, name: "Bot", path: "/bot" },
    { id: 3, name: "Transactions", path: "/transactions" },
    { id: 4, name: "Networks", path: "/networks" },
    { id: 5, name: "Blockchain", path: "/blockchain" },
  ];

  const navbarList = () => {
    return (
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 ">
        {navbarItem.map((item) => (
          <li key={item.id}>
            <div className="navbar-menu-item" aria-current={`page`}>
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <nav>
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img
              src={NavbarLogo}
              className="h-8 mr-3"
              alt="Mutualization Token and Wallet Payment"
              loading="lazy"
            />
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-blend-multiply focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            {navbarList()}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

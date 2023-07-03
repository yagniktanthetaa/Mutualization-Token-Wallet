import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SelectToken from "./components/SelectToken/SelectToken";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/token" element={<SelectToken />} />
      </Routes>
    </>
  );
};

export default App;

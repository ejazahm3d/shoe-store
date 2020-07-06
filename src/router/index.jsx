import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import Shoe from "../pages/Shoe";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shoe" element={<Shoe />} />
    </Routes>
  );
};

export default Router;

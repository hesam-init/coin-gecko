import { Route, Routes } from "react-router-dom";
import { Coin } from "../pages/Coin/Coin";
import { Home } from "../pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coin" element={<Coin />} />
    </Routes>
  );
};

export { Router };

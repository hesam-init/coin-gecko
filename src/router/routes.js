import { Route, Routes } from "react-router-dom";
import { CoinInfo } from "../pages/CoinInfo/CoinInfo";
import { Home } from "../pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coin/:id" element={<CoinInfo />} />
    </Routes>
  );
};

export { Router };

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CoinInfo } from "../pages/CoinInfo/CoinInfo";
import { Home } from "../pages/Home/Home";

const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id/:symbol" element={<CoinInfo />} />
      </Routes>
    </AnimatePresence>
  );
};

export { Router };

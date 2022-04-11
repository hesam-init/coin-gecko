import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-black p-5 rounded-xl text-white gap-5 sticky top-5 z-50">
      <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
      <NavLink to="/coin" className="hover:text-blue-500">Coin</NavLink>
    </div>
  );
};

export { Navbar };

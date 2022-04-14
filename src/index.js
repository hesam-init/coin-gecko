import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./container/App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

console.log("Crypto App");

root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);

reportWebVitals();

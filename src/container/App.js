import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Router } from "../router/routes";
import "./App.css";

function App() {
  return (
    <div className="p-5">
      <BrowserRouter>
        <Navbar />
        <div className="mt-5">
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

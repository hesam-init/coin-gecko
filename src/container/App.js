import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Router } from "../router/routes";
import "./App.css";

function App() {
  return (
    <div className="p-5 h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="mt-5 h-5/6">
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

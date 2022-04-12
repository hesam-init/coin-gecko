import { Navbar } from "../components/Navbar/Navbar";
import { Router } from "../router/routes";
import "./App.css";

function App() {
  return (
    <div className="p-5 h-screen">
      <Navbar />
      <div className="mt-5 h-5/6">
        <Router />
      </div>
    </div>
  );
}

export default App;

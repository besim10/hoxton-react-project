import { useEffect, useState } from "react";
import Header from "./components/header";
import { Navigate, Route, Routes } from "react-router-dom";
import Pins from "./Pages/Pins";
import "./index.css";
import PinDetail from "./Pages/PinDetail";

function App() {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pins")
      .then((resp) => resp.json())
      .then((pinsFromServer) => setPins(pinsFromServer));
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/pins" />} />
          <Route path="/pins" element={<Pins pins={pins} />} />
          <Route path="/pins/:id" element={<PinDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

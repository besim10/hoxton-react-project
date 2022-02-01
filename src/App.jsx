import { useEffect, useState } from "react";
import Header from "./components/header";
import { Navigate, Route, Routes } from "react-router-dom";
import Pins from "./Pages/Pins";
import "./index.css";
import PinDetail from "./pages/PinDetail";
import Modals from "./components/modals/Modals";
import create from "./icons/Create.svg";
function App() {
  const [pins, setPins] = useState([]);
  const [modal, setModal] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pins")
      .then((resp) => resp.json())
      .then((pinsFromServer) => setPins(pinsFromServer));
  }, []);
  return (
    <div className="App">
      <Header setModal={setModal} />
      <main>
        <button
          onClick={() => {
            setModal("create");
          }}
          className="create-pin__button-on-page"
        >
          <img src={create} alt="" />
        </button>

        <Routes>
          <Route index element={<Navigate to="/pins" />} />
          <Route path="/pins" element={<Pins pins={pins} />} />
          <Route path="/pins/:id" element={<PinDetail />} />
        </Routes>
        <Modals modal={modal} setModal={setModal} />
      </main>
    </div>
  );
}

export default App;

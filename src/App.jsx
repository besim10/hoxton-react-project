import { useEffect, useState } from "react";
import Header from "./components/header";
import { Navigate, Route, Routes } from "react-router-dom";
import Pins from "./Pages/Pins";
import "./index.css";
import PinDetail from "./pages/PinDetail";
import Modals from "./components/modals/Modals";
import create from "./icons/Create.svg";
import Profile from "./pages/Profile";
import PinBuilder from "./pages/PinBuilder";
function App() {
  const [pins, setPins] = useState([]);
  const [modal, setModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pins")
      .then((resp) => resp.json())
      .then((pinsFromServer) => setPins(pinsFromServer));
  }, []);
  return (
    <div className="App">
      <Header
        setModal={setModal}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <main>
        {currentUser !== null ? (
          <button
            onClick={() => {
              setModal("create");
            }}
            className="create-pin__button-on-page"
          >
            <img src={create} alt="" />
          </button>
        ) : null}

        <Routes>
          <Route index element={<Navigate to="/pins" />} />
          <Route path="/pins" element={<Pins pins={pins} />} />
          <Route
            path="/pins/:id"
            element={<PinDetail currentUser={currentUser} />}
          />
          <Route
            path="/pin-builder"
            element={
              <PinBuilder
                pins={pins}
                setPins={setPins}
                currentUser={currentUser}
              />
            }
          />

          <Route
            path="/profile/*"
            element={<Profile currentUser={currentUser} />}
          />
        </Routes>
        <Modals
          modal={modal}
          setModal={setModal}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Header from "./components/header";
import { Navigate, Route, Routes } from "react-router-dom";
import Pins from "./Pages/Pins";
import "./index.css";
import PinDetail from "./pages/PinDetail";
import Modals from "./components/modals/Modals";
import create from "./icons/Create.svg";
import Profile from "./pages/Profile";
function App() {
  const [pins, setPins] = useState([]);
  const [modal, setModal] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // https://randomuser.me/documentation#howto
  // const [currentUser, setCurrentUser] = useState({
  //   name: "besim",
  //   surname: "sokoli",
  profil: "https://randomuser.me/api/portraits/men/10.jpg",
    // });
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
          <Route
            path="/profile/*"
            element={<Profile currentUser={currentUser} />}
          />
        </Routes>
        <Modals
          modal={modal}
          setModal={setModal}
          userExists={userExists}
          setUserExists={setUserExists}
          setCurrentUser={setCurrentUser}
        />
      </main>
    </div>
  );
}

export default App;

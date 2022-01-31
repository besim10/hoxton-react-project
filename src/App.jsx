import { useEffect, useState } from "react";
import Header from "./components/header";
import "./index.css";

function App() {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pins")
      .then((resp) => resp.json())
      .then((pinsFromServer) => setPins(pinsFromServer));
  }, []);
  console.log(pins);
  return (
    <div className="App">
      <Header />
      <div className="main">
        {pins.map((pin, index) => (
          <div className="pin">
            <img key={index} src={pin.imgSrc} />
            <span>{pin.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

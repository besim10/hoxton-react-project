import "./index.css";
import logo from "./icons/Pinterest-logo.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="home">
          {" "}
          <span>Home</span>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <button className="button log-in">Log in</button>
        <button className=" button sign up">Sign Up</button>
      </div>
    </div>
  );
}

export default App;

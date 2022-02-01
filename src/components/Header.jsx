import { Link } from "react-router-dom";
import logo from "../icons/Pinterest-logo.svg";
function Header({ setModal }) {
  return (
    <div className="header">
      <Link to="/pins">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="home">
        <Link to="/pins">
          <span>Home</span>
        </Link>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <button
        onClick={() => {
          setModal("log-in");
        }}
        className="button log-in"
      >
        Log in
      </button>
      <button
        onClick={() => {
          setModal("sign-up");
        }}
        className=" button sign up"
      >
        Sign Up
      </button>
    </div>
  );
}
export default Header;

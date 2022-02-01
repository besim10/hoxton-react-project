import { Link } from "react-router-dom";
import logo from "../icons/Pinterest-logo.svg";
function Header() {
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
      <button className="button log-in">Log in</button>
      <button className=" button sign up">Sign Up</button>
    </div>
  );
}
export default Header;

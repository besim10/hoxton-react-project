import logo from "../icons/Pinterest-logo.svg";
function Header() {
  return (
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
  );
}
export default Header;

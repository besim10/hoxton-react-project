import logo from "../../icons/Pinterest-logo.svg";
import close from "../../icons/Close.svg";
function LogIn({ setModal }) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button
          onClick={() => {
            setModal("");
          }}
          className="close-modal"
        >
          <img src={close} alt="" />
        </button>
        <span className="logo">
          <img src={logo} alt="Pinterest Logo" />
        </span>
        <h1>Welcome to Pinterest</h1>
        <div className="modal-details">
          <form>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button className="button submit" type="submit">
              Log in
            </button>
          </form>
          <p>
            By continuing, you agree to Pinterest's{" "}
            <strong>Terms of Service</strong> and acknowledge you've read our{" "}
            <strong>Privacy Policy</strong>
          </p>
          <span
            onClick={() => {
              setModal("sign-up");
            }}
            className="modal-details__check"
          >
            Not on Pinterest yet? Sign up
          </span>
        </div>
      </div>
    </div>
  );
}
export default LogIn;

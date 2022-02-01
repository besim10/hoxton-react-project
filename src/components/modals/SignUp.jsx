import logo from "../../icons/Pinterest-logo.svg";
import close from "../../icons/Close.svg";
function SignUp({ setModal }) {
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
        <span>Find new ideas to try</span>
        <div className="modal-details">
          <form>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="text" name="age" placeholder="Age" />
            <button className="button submit" type="submit">
              Continue
            </button>
          </form>
          <p>
            By continuing, you agree to Pinterest's{" "}
            <strong>Terms of Service</strong> and acknowledge you've read our{" "}
            <strong>Privacy Policy</strong>
          </p>
          <span
            onClick={() => {
              setModal("log-in");
            }}
            className="modal-details__check"
          >
            Already a member? Log in
          </span>
        </div>
      </div>
    </div>
  );
}
export default SignUp;

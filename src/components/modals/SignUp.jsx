import logo from "../../icons/Pinterest-logo.svg";
import close from "../../icons/Close.svg";
function SignUp({ setModal, userExists, setUserExists, setCurrentUser }) {
  function addUserToServer(newUser) {
    fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())
      .then((userFromServer) => {
        setCurrentUser(userFromServer);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const sex = e.target.sex.value;

    const newUser = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      orders: [],
      likedProducts: [],
    };

    addUserToServer(newUser);
  };
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
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="surname" placeholder="Surname" required />
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

import Create from "./Create";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
function Modals({
  modal,
  setModal,
  userExists,
  setUserExists,
  setCurrentUser,
}) {
  switch (modal) {
    case "log-in":
      return (
        <LogIn
          setModal={setModal}
          setCurrentUser={setCurrentUser}
          userExists={userExists}
          setUserExists={setUserExists}
        />
      );
    case "sign-up":
      return (
        <SignUp
          setModal={setModal}
          userExists={userExists}
          setUserExists={setUserExists}
          setCurrentUser={setCurrentUser}
        />
      );
    case "create":
      return <Create setModal={setModal} />;
    default:
      return null;
  }
}
export default Modals;

import Create from "./Create";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
function Modals({ modal, setModal }) {
  switch (modal) {
    case "log-in":
      return <LogIn setModal={setModal} />;
    case "sign-up":
      return <SignUp setModal={setModal} />;
    case "create":
      return <Create setModal={setModal} />;
    default:
      return null;
  }
}
export default Modals;

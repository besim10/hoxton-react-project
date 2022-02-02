import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile({ currentUser }) {
  const [createdPins, setCreatedPins] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser === null) navigate("/");
  }, [currentUser, navigate]);
  useEffect(() => {
    fetch("http://localhost:3001/pins")
      .then((resp) => resp.json())
      .then((pinsFromServer) => {
        let copyOfPinsFromServer = pinsFromServer;
        copyOfPinsFromServer = copyOfPinsFromServer.filter(
          (pin) => pin.userId === currentUser.id
        );
        setCreatedPins(copyOfPinsFromServer);
      });
  }, []);
  if (currentUser === null) return <h1>User not signed in...</h1>;
  return (
    <div className="profile-main">
      <img
        class="profile-main__photo"
        src={`https://i.pravatar.cc/150?img=${currentUser.id}`}
      />
      <h1 className="profile-main__title">{`${currentUser.name} ${currentUser.surname}`}</h1>
      <span>{`@${currentUser.name}${currentUser.surname}`}</span>
      <div className="action-bar">
        <button>Created</button>
        <button>Saved</button>
      </div>
      <ul className="created-list">
        {createdPins.map((pin) => (
          <li className="created-list__item">
            <img src={pin.imgSrc} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Profile;

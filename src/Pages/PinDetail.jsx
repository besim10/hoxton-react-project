import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PinDetail({ currentUser, setCurrentUser, setModal }) {
  const params = useParams();
  const [pin, setPin] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3001/pins/${params.id}?_expand=user`)
      .then((resp) => resp.json())
      .then((pinFromServer) => setPin(pinFromServer));
  }, []);

  const addSavedPinToServer = () => {
    if (currentUser === null) {
      setModal("cannot-save");

      setTimeout(() => {
        setModal("log-in");
      }, 2000);
      return;
    }

    alert("User signned in!");
    if (pin === null) return;
    fetch(`http://localhost:3001/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        saved: [...currentUser.saved, { pinId: pin.id }],
      }),
    })
      .then((resp) => resp.json())
      .then(() => {
        let copyOfCurrentUser = JSON.parse(JSON.stringify(currentUser));
        copyOfCurrentUser.saved = [
          ...copyOfCurrentUser.saved,
          { pinId: pin.id },
        ];
        setCurrentUser(copyOfCurrentUser);
        setTimeout(() => {
          navigate("/profile");
        }, 500);
      });
  };
  if (pin === null) return <h1>Loading...</h1>;
  return (
    <div className="pin-detail-wrapper">
      <div className="pin-detail-container">
        <div className="pin-detail__image">
          <img src={pin.imgSrc} alt={pin.name} />
        </div>
        <div className="pin-detail__descriptions">
          <button onClick={addSavedPinToServer} className="button save">
            SAVE
          </button>
          <h4>
            <span className="pin-detail__description__uploaded">
              Uploaded by:
            </span>{" "}
            {pin.user.name} {pin.user.surname}
          </h4>
          <h3>{pin.name}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            sit est inventore distinctio praesentium, neque possimus ipsa et?
            Consequatur amet ex magnam officia inventore laboriosam nihil totam
            vitae fugit aspernatur.
          </p>
        </div>
      </div>
    </div>
  );
}
export default PinDetail;

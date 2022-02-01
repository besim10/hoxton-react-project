import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PinDetail() {
  const params = useParams();
  const [pin, setPin] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3001/pins/${params.id}`)
      .then((resp) => resp.json())
      .then((pinFromServer) => setPin(pinFromServer));
  }, []);

  if (pin === null) return <h1>Loading...</h1>;
  return (
    <div className="pin-detail-wrapper">
      <div className="pin-detail-container">
        <div className="pin-detail__image">
          <img src={pin.imgSrc} alt={pin.name} />
        </div>
        <div className="pin-detail__descriptions">
          <button className="button save">SAVE</button>
          <h4>Uploaded by: {pin.name}</h4>
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

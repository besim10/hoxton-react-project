import { Link } from "react-router-dom";

function Pins({ pins }) {
  return (
    <div className="pins-container">
      {pins.map((pin, index) => (
        <Link key={index} to={`/pins/${pin.id}`}>
          <div className="pin">
            <img src={pin.imgSrc} />
            <span>{pin.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Pins;

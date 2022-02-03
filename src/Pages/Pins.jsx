import { Link } from "react-router-dom";

function Pins({ pins }) {
  const reversed = [...pins].reverse();
  return (
    <div className="pins-container">
      {reversed.map((pin, index) => (
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

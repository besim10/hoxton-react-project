import { Link } from "react-router-dom";

function Pins({ pins, search }) {
  const pinsToShow = () => {
    let updatesPins = pins;
    updatesPins = updatesPins.filter((pin) =>
      pin.name.toUpperCase().includes(search.toUpperCase())
    );
    return updatesPins;
  };
  return (
    <div className="pins-container">
      {pinsToShow().map((pin, index) => (
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

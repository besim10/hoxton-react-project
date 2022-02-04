import { Link } from "react-router-dom";

function SavedPins({ savedPins }) {
  return (
    <ul className="saved-list">
      {savedPins.map((pin) => (
        <Link key={pin.id} to={`/pins/${pin.id}`}>
          <li className="saved-list__item">
            <img src={pin.imgSrc} alt="" />
            <div className="overlay"></div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
export default SavedPins;

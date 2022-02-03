function SavedPins({ savedPins }) {
  return (
    <ul className="saved-list">
      {savedPins.map((pin) => (
        <li key={pin.id} className="saved-list__item">
          <img src={pin.imgSrc} alt="" />
        </li>
      ))}
    </ul>
  );
}
export default SavedPins;

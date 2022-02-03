function CreatedPins({ createdPins }) {
  return (
    <ul className="created-list">
      {createdPins.map((pin) => (
        <li key={pin.id} className="created-list__item">
          <img src={pin.imgSrc} alt="" />
        </li>
      ))}
    </ul>
  );
}
export default CreatedPins;

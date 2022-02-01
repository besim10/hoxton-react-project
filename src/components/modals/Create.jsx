import create from "../../icons/Create.svg";
function Create({ setModal }) {
  return (
    <div
      onClick={() => {
        setModal("");
      }}
      className="modal-wrapper create"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal create"
      >
        <button className="modal-create__button">
          <img src={create} alt="" />
          <span>Create a pin</span>
        </button>
      </div>
    </div>
  );
}
export default Create;

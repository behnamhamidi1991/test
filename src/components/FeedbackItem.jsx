import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function FeedbackItem({ item }) {
  return (
    <div className="feedback-item">
      <div className="btnContainer">
        <button>
          <FaEdit />
        </button>
        <button>
          <FaRegTrashAlt />
        </button>
      </div>
      <p className="name">{item.name}</p>
      <p>{item.text}</p>
    </div>
  );
}

export default FeedbackItem;

import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function FeedbackItem() {
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
      <p className="name">Marcius Warn</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
        delectus quasi maxime, doloribus, ut dolorum non consequuntur saepe
        optio autem nisi cum tempora deleniti? Eius non dicta possimus soluta
        rem!
      </p>
    </div>
  );
}

export default FeedbackItem;

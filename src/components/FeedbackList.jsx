import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  return (
    <>
      <div className="feedback-list">
        <div className="feedbackNumber">
          {feedback.length === 0
            ? "No comments yet"
            : feedback.length === 1
            ? feedback.length + " Comment"
            : feedback.length + " Comments"}
        </div>
        <div className="feedbackItem">
          {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FeedbackList;

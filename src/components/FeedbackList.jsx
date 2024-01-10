import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  return (
    <>
      <div className="feedback-list">
        <div className="feedbackNumber">3 Comments</div>
        <div className="feedbackItem">
          <FeedbackItem />
        </div>
      </div>
    </>
  );
}

export default FeedbackList;

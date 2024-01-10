function FeedbackForm() {
  return (
    <div className="form-container">
      <h2>Share your opinion with us and rate our service</h2>
      <form>
        <input type="text" className="nameInput" placeholder="Name" />
        <textarea placeholder="Write your comment here ..."></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}

export default FeedbackForm;

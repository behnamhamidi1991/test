import React, { useState, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const { addFeedback } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (text === "" || text.trim().length === 0) {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("You must write more than 10 characters!");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" && text !== "") {
      window.alert("You must write your name!");
    } else if (name !== "" && text.trim().length > 10) {
      const newItem = {
        name,
        text,
      };

      addFeedback(newItem);
      setMessage("");
      setName("");
    }
  };

  return (
    <div className="form-container">
      <h2>Share your opinion with us and rate our service</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="nameInput"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <textarea
          placeholder="Write your comment here ..."
          value={text}
          onChange={handleTextChange}
        />
        <button className={btnDisabled ? "disabled" : "active"}>Send</button>
        {message ? (
          <p style={{ backgroundColor: "red", padding: "4px 10px" }}>
            {" "}
            {message}{" "}
          </p>
        ) : null}
      </form>
    </div>
  );
}

export default FeedbackForm;

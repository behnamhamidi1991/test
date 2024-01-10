import React, { createContext, useState } from "react";

const FeedbackContext = createContext();

const fakeData = [
  {
    id: 1,
    name: "Tim Donner",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At explicabo itaque velit aliquam voluptatibus fugiat saepe ducimus vel ut! Rerum atque, tempore incidunt quidem ipsam porro eaque vel provident consequatur!",
  },
  {
    id: 2,
    name: "Jill Valentine",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At explicabo itaque velit aliquam voluptatibus fugiat saepe ducimus vel ut! Rerum atque, tempore incidunt quidem ipsam porro eaque vel provident consequatur!",
  },
];

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(fakeData);

  // Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = crypto.randomUUID();
    setFeedback([newFeedback, ...feedback]);
  };

  const contextValues = { feedback, addFeedback };

  return (
    <FeedbackContext.Provider value={contextValues}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

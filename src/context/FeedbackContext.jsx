import React, { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const contextValues = {};

  return (
    <FeedbackContext.Provider value={contextValues}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

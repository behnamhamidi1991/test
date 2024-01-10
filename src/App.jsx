import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";
import React from "react";

function App() {
  return (
    <FeedbackProvider>
      <Header />
      <FeedbackForm />
      <FeedbackList />
    </FeedbackProvider>
  );
}

export default App;

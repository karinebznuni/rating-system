import { useState } from "react";
import "./App.scss";
import Feedback from "./components/Feedback";
import Thanks from "./components/Thanks";

function App() {
  const [activeRating, setActiveRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onRatingChange = (rate) => {
    setActiveRating(rate);
  };

  return (
    <>
      <div className="container">
        {isSubmitted ? (
          <Thanks activeRating={activeRating} />
        ) : (
          <Feedback
            onSubmit={() => setIsSubmitted(true)}
            activeRating={activeRating}
            onRatingChange={onRatingChange}
            className="feedback"
          />
        )}
      </div>
    </>
  );
}

export default App;

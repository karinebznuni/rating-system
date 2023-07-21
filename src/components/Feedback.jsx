import "./Feedback.scss";
import Round from "./Round";
import star from "../assets/icon-star.svg";

export default function Feedback({ onRatingChange, onSubmit, activeRating }) {
  let rates = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="card1">
        <Round disabled={true}>
          <img src={star} alt="star" />
        </Round>
        <h3 className="h3">How did we do?</h3>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="rate">
          {rates.map((rating) => (
            <Round
              key={rating}
              className="round"
              isActive={activeRating === rating}
              onClick={() => onRatingChange(rating)}
            >
              {rating}
            </Round>
          ))}
        </div>
        <button disabled={!activeRating} onClick={onSubmit} className="submit">
          SUBMIT
        </button>
      </div>
    </>
  );
}

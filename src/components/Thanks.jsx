import "./Thanks.scss";
import thanks from "../assets/thanks.svg";

export default function Thanks({ activeRating }) {
  return (
    <>
      <div className="card2">
        <img className="img" src={thanks} alt="star" />
        <div className="text2"> You selected {activeRating} out of 5 </div>
        <h3 className="thankyou">Thank you!</h3>
        <span className="text4">
          We appreciate you taking the time to give a rating. If you ever need
          more support dont hesitate to get in touch!
        </span>
      </div>
    </>
  );
}

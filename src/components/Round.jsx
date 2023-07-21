import "./Round.scss";

export default function Round({ onClick, children, isActive, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`round ${isActive ? "active" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      {children}
    </button>
  );
}

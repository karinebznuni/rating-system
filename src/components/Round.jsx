import "./Round.css";

export default function Round({ onClick, children, isActive }) {
  return (
    <>
      <div onClick={onClick} className={`round mg ${isActive && "active"}`}>
        {children}
      </div>
    </>
  );
}

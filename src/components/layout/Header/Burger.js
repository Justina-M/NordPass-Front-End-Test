import "./Burger.scss";

const Burger = ({ className, onClick, isActive }) => {
  return (
    <button
      className={`Burger ${isActive ? "Burger--active" : ""} ${
        className ? className : ""
      }`}
      onClick={onClick}
      aria-label="open menu"
    >
      <span className="block"></span>
    </button>
  );
};

export default Burger;

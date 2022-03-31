const Button = ({ className, children, onClick }) => {
  return (
    <button
      className={`Button ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

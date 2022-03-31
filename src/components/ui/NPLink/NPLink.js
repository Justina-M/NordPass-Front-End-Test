const NPLink = ({ to, className, children, onClick }) => {
  return (
    <a
      href={to}
      className={`NPLink ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NPLink;

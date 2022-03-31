const ErrorMessage = ({ children }) => {
  return (
    <div className="ErrorMessage text-center pt-3 pb-3">
      <p>{children}</p>
    </div>
  );
};

export default ErrorMessage;

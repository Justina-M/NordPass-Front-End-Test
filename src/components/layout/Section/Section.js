import React from "react";

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={`vw-100 ${className ? className : ""}`}>
      <div className="content-width pt-9 pb-9 text-center">{children}</div>
    </section>
  );
};

export default Section;

import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const firstItemId = data[0].id;

  return (
    <div className="Accordion margin-auto">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          heading={item.heading}
          content={item.content}
          collapse={firstItemId !== item.id}
        />
      ))}
    </div>
  );
};

export default Accordion;

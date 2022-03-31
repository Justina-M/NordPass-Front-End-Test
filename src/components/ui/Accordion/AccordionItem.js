import { useState } from "react";
import { ReactComponent as ChevronDown } from "../../../assets/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../../../assets/chevron-up.svg";

const AccordionItem = ({ id, heading, content, collapse }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapse);

  const handleExpand = () => {
    setIsCollapsed(!isCollapsed);
  };

  const itemContent = document.querySelector(
    `.Accordion__item--${id} .Accordion__item-content`
  );

  if (itemContent) {
    if (isCollapsed) {
      itemContent.style.height = 0;
      itemContent.style.paddingBottom = 0;
    } else {
      itemContent.style.height = itemContent.scrollHeight + "px";
      itemContent.style.paddingBottom = "1.6rem";
    }
  }

  return (
    <div className={`Accordion__item Accordion__item--${id}`}>
      <button
        className="Accordion__item-header flex space-between"
        onClick={handleExpand}
      >
        <div>{heading}</div>
        <div className="Accordion__chevron">
          {isCollapsed ? <ChevronDown /> : <ChevronUp />}
        </div>
      </button>
      <div className="Accordion__item-content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default AccordionItem;

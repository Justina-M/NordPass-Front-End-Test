import { Fragment, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Button from "../Button/Button";

const compareData = (sortFieldValue, sortFieldType) => {
  if (sortFieldType === "string") {
    return (a, b) => {
      if (a[sortFieldValue] > b[sortFieldValue]) return 1;
      if (a[sortFieldValue] < b[sortFieldValue]) return -1;
      return 0;
    };
  }

  if (sortFieldType === "number") {
    return (a, b) => b[sortFieldValue] - a[sortFieldValue];
  }
};

const SortableTable = ({
  data = [],
  columns = [], // {heading: string, dataKey: string, dataType: string sortAlias: string}[]
  sortedByKey,
  sortedByKeyType,
  showRows = 10,
}) => {
  let initialSortedField;

  if (sortedByKey && sortedByKeyType) {
    initialSortedField = { value: sortedByKey, type: sortedByKeyType };
  } else {
    initialSortedField = null;
  }

  const allRowsCount = data.length;

  const [sortedField, setSortedField] = useState(initialSortedField);
  const [visibleRowsCount, setVisibleRowsCount] = useState({
    count: showRows,
    isAllVisible: false,
  });

  let sortedData = [...data];

  if (sortedField !== null) {
    sortedData.sort(compareData(sortedField.value, sortedField.type));
  }

  sortedData = sortedData.slice(0, visibleRowsCount.count);

  const handleSort = (e) => {
    const { value } = e.target;

    if (!value) return;

    const type = e.target.selectedOptions[0].attributes["data-type"].value;

    setSortedField({ value, type });
  };

  const handleToggleVisibleRowsCount = () => {
    setVisibleRowsCount((prev) => ({
      count: prev.isAllVisible ? showRows : allRowsCount,
      isAllVisible: prev.isAllVisible ? false : true,
    }));
  };

  const sortSelection = (
    <Fragment>
      <label htmlFor="sort-select" className="visually-hidden">
        Sort table field by
      </label>
      <select
        id="sort-select"
        className="SortableTable__sort-field"
        name="sort"
        defaultValue={sortedField?.value}
        onChange={handleSort}
      >
        <option value="">Sort by</option>
        {columns.map((column, index) => (
          <option
            key={index}
            value={column.dataKey}
            data-type={column.dataType}
          >
            {column.sortAlias || column.dataKey}
          </option>
        ))}
      </select>
    </Fragment>
  );

  const tableHead = (
    <tr>
      {columns.map((column, index, arr) => {
        if (index === 0) {
          return (
            <th colSpan="2" key={index} className="v-align-bottom">
              {column.heading}
            </th>
          );
        } else if (index === arr.length - 1) {
          return (
            <th key={index} className="flex flex-column flex-end">
              {sortSelection}
              <span className={`${column.heading ? "pt-3" : ""}`}>
                {column.heading}
              </span>
            </th>
          );
        } else {
          return <th key={index}>{column.heading}</th>;
        }
      })}
    </tr>
  );

  const tableBody = sortedData.map((item, index) => {
    return (
      <CSSTransition key={index} timeout={401} classNames="SortableTable__row-">
        <tr>
          <td>
            <div>{index + 1}.</div>
          </td>
          {columns.map((column, index) => (
            <td key={index}>{item[column.dataKey]}</td>
          ))}
        </tr>
      </CSSTransition>
    );
  });

  return (
    <Fragment>
      <div className="SortableTable">
        <div className=" flex justify-center pb-3">
          <table>
            <thead>{tableHead}</thead>
            <TransitionGroup component="tbody">{tableBody}</TransitionGroup>
          </table>
        </div>
        <Button onClick={handleToggleVisibleRowsCount}>
          {visibleRowsCount.isAllVisible
            ? "Show Less"
            : `Show All (${allRowsCount})`}
        </Button>
      </div>
    </Fragment>
  );
};

export default SortableTable;

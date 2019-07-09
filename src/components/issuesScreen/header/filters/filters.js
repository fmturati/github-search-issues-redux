import React from "react";
import "./filters.css";

const Filters = props => {
  const { filterActive, filters, repoSearched, getAPI } = props;

  const createFiltersButtons = filters.map((filter, index) => {
    const { name, action } = filter;
    return (
      <li
        className={`filter-item ${filterActive === action &&
          "filter-item--active"}`}
        key={index}
        value={action}
        name="filter"
        onClick={() => {
          getAPI(repoSearched, action);
        }}
      >
        {name}
      </li>
    );
  });

  return (
    <div className="filter-section">
      <ul className="filter-list">{createFiltersButtons}</ul>
    </div>
  );
};

export default Filters;

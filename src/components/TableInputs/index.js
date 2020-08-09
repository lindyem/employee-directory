import React from "react";

function TableInputs(props) {
  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <input
        id="filter"
        name="filter"
        type="text"
        onChange={props.handleFilterChange}
      ></input>

      <label htmlFor="sort">Sort: </label>
      <select name="sort" id="sort" onChange={props.handleSortChange}>
        <option value="id">ID</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>
    </div>
  );
}

export default TableInputs;

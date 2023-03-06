import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../TodoAtoms";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      Filters :
      <select value={filter} onChange={updateFilter}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="UnCompleted">UnCompleted</option>
      </select>
    </div>
  );
};

export default TodoListFilters;

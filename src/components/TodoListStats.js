import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../TodoAtoms";

const TodoListStats = () => {
  const { totalNum, completedNum, unCompleteNum, percent } =
    useRecoilValue(todoListStatsState);

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        <li>Total items : {totalNum}</li>
        <li>Items completed : {completedNum}</li>
        <li>Items uncompleted : {unCompleteNum}</li>
        <li>Percent completed : {percent}</li>
      </ul>
    </div>
  );
};

export default TodoListStats;

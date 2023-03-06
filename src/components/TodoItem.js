import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../TodoAtoms";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemComplete = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = deleteItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input
        style={{ border: "none", textAlign: "center", fontWeight: 700 }}
        type="text"
        value={item.text}
        onChange={editItemText}
      />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemComplete}
      />
      <button onClick={deleteItem}>🗑️</button>
    </div>
  );
};

export default TodoItem;

function replaceItemAtIndex(arr, index, newItem) {
  return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
}
function deleteItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

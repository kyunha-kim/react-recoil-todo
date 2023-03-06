import React from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";
import { filteredTodoList } from "./TodoAtoms";
import { currentUserNameQuery } from "./UserAtoms";

function App() {
  // const todoList = useRecoilValue(filteredTodoList);
  const filteredTodo = useRecoilValue(filteredTodoList);

  return (
    <div className="App">
      <React.Suspense fallback={<div>...loading</div>}>
        <CurrentUserInfo />
      </React.Suspense>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {filteredTodo.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
}

export default App;

function CurrentUserInfo() {
  const username = useRecoilValue(currentUserNameQuery);

  return <div>{username}</div>;
}

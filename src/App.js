import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";
import { todoListState } from "./TodoAtoms";

function App() {
  const todoList = useRecoilValue(todoListState);
  return (
    <div className="App">
      <TodoItemCreator />
      {console.log(todoList)}
      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
}

export default App;

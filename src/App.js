import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoListFilters from "./components/TodoListFilters";
import { filteredTodoList } from "./TodoAtoms";

function App() {
  // const todoList = useRecoilValue(filteredTodoList);
  const filteredTodo = useRecoilValue(filteredTodoList);

  return (
    <div className="App">
      <TodoListFilters />
      <TodoItemCreator />

      {filteredTodo.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
}

export default App;

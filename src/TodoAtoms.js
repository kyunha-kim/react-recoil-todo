import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "All",
});

export const filteredTodoList = selector({
  key: "filteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Completed":
        return list.filter((item) => item.isComplete);
      case "UnCompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

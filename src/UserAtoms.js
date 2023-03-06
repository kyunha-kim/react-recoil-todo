import axios from "axios";
import { atom, selector } from "recoil";

export const currentUserIdState = atom({
  key: "currentUserIdState",
  default: Math.floor(Math.random() * 10) + 1,
});

export const currentUserNameQuery = selector({
  key: "currentUserName",
  get: async ({ get }) => {
    const path = "https://jsonplaceholder.typicode.com/users/";
    const response = await axios.get(`${path}${get(currentUserIdState)}`);
    return response.data.name;
  },
});

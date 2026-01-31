import React from "react";
import { RandomDog } from "./RandomDog";
import { TodoList } from "./TodoList";

export default function App() {
  return (
    <div>
      <RandomDog />
      <hr />
      <TodoList />
    </div>
  );
}

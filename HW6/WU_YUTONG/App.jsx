import React from "react";
import Counter from "./counter";
import { Shoppingcart } from "./Shoppingcart";

export default function App() {
  return (
    <div>
      <Counter initialValue={1} />

      <hr />

      <Shoppingcart />
    </div>
  );
}

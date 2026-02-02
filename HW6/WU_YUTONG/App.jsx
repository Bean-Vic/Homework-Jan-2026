import React from "react";
import Counter from "./counter";
import { Shoppingcart } from "./Shoppingcart";
import { counterlocal } from "./counterlocal";

const CacheCounter = counterlocal(Counter, "counter_value");

export function App() {
  return (
    <div>
      <CacheCounter initialValue={0} />

      <hr />

      <Shoppingcart />
    </div>
  );
}

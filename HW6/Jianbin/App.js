import React from "react";
import Counter from "./Counter";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <div>
      <Counter initialValue={0} />
      <hr />
      <ShoppingCart />
    </div>
  );
}

export default App;

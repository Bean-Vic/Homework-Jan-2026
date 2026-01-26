import React, { useState } from "react";

export const Shoppingcart = () => {
  const [quantity, updateQuantity] = useState(0);
  const [total, changeTotal] = useState(0);

  const add = () => {
    changeTotal(total + quantity * 10);
  };

  return (
    <div>
      <h2>Mini Shopping Cart</h2>

      <select>
        <option>Product A</option>
        <option>Product B</option>
        <option>Product C</option>
      </select>

      <input
        type="number"
        value={quantity}
        onChange={(e) => updateQuantity(e.target.value)}
      />

      <button onClick={add}>Add</button>

      <p>Total: ${total}</p>
    </div>
  );
};

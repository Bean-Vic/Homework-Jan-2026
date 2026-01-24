import React, { useState } from "react";

const products = [
  { name: "Product A", price: 15 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 10 },
];

function ShoppingCart() {
  const [selected, setSelected] = useState(products[0]);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([
      ...cart,
      {
        name: selected.name,
        price: selected.price,
        quantity: qty,
      },
    ]);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Mini Shopping Cart</h2>

      <select
        onChange={(e) =>
          setSelected(products.find(p => p.name === e.target.value))
        }
      >
        {products.map(p => (
          <option key={p.name} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={qty}
        min="1"
        onChange={(e) => setQty(Number(e.target.value))}
      />

      <button onClick={addToCart}>Add</button>

      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button onClick={() => removeItem(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default ShoppingCart;

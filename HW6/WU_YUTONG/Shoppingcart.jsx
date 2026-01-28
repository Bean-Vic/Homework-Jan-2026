import React, { useState } from "react";

const products = [
  { name: "Product A", price: 15 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 30 },
];

export const Shoppingcart = () => {
  const defaultProduct = products[0].name;
  const defaultQuantity = 0;
  const defaultCart = [];

  const [selected, updateSelected] = useState(defaultProduct);
  const [quantity, updateQuantity] = useState(defaultQuantity);
  const [cart, updateCart] = useState(defaultCart);

  const add = () => {
    const product = products.find(function (item) {
      return item.name === selected;
    });

    if (product === undefined) return;

    const Item = {
      name: product.name,
      price: product.price,
      quantity: quantity,
    };

    const updatedCart = [...cart, Item];
    updateCart(updatedCart);
  };

  const remove = (index) => {
    const before = cart.slice(0, index);
    const after = cart.slice(index + 1);
    const newCart = before.concat(after);
    updateCart(newCart);
  };

  let total = 0;
  cart.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  const renderOptions = function () {
    const options = [];
    products.forEach(function (p) {
      options.push(
        <option key={p.name} value={p.name}>
          {p.name}
        </option>,
      );
    });
    return options;
  };

  const renderRows = function () {
    const rows = [];

    cart.forEach(function (item, i) {
      rows.push(
        <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>{item.price * item.quantity}</td>
          <td>
            <button onClick={() => remove(i)}>Remove</button>
          </td>
        </tr>,
      );
    });

    return rows;
  };

  const renderTable = function () {
    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    );
  };

const content = (
  <div>
    <h3>Mini Shopping Cart</h3>

    <select value={selected} onChange={(e) => updateSelected(e.target.value)}>
      {renderOptions()}
    </select>

    <input
      type="text"
      value={quantity}
      onChange={(e) => updateQuantity(Number(e.target.value))}
    />

    <button onClick={add}>Add</button>

    <h4>Cart</h4>

    {renderTable()}

    <p>Total: {total}</p>
  </div>
);

return content;
};

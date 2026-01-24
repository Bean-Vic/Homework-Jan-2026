function ShoppingCart() {
  const products = [
    { name: "Product A", price: 15 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 10 },
  ];

  const [selected, setSelected] = React.useState(products[0]);
  const [qty, setQty] = React.useState(1);
  const [cart, setCart] = React.useState([]);

  const addToCart = () => {
    setCart([...cart, { ...selected, quantity: qty }]);
  };

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
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { useState } from "react";

const PRODUCTS = [
  { id: "A", name: "Product A", price: 15 },
  { id: "B", name: "Product B", price: 10 },
  { id: "C", name: "Product C", price: 20 },
];

export default function App() {
  const [selectedId, setSelectedId] = useState("A");
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]); // [{id, name, price, qty}]

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedId);

  const handleAdd = () => {
    if (qty <= 0) return;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === selectedId);

      if (existing) {
        return prev.map((item) =>
          item.id === selectedId ? { ...item, qty: item.qty + qty } : item,
        );
      }

      return [
        ...prev,
        {
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          qty,
        },
      ];
    });
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={styles.card}>
      <h2 style={{ textAlign: "center" }}>Mini Shopping Cart</h2>

      {/* top controls */}
      <div style={styles.row}>
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          {PRODUCTS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          style={{ width: 60 }}
        />

        <button onClick={handleAdd}>Add</button>
      </div>

      <hr />

      {/* cart list */}
      <h3>Cart</h3>

      {cart.map((item) => (
        <div key={item.id} style={styles.cartRow}>
          <div>
            {item.name} x {item.qty}
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <strong>${(item.price * item.qty).toFixed(2)}</strong>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <hr />

      {/* total */}
      <div style={styles.totalRow}>
        <strong>Total:</strong>
        <strong>${total.toFixed(2)}</strong>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: 400,
    margin: "40px auto",
    padding: 20,
    border: "2px solid #333",
    borderRadius: 8,
    fontFamily: "Arial",
  },
  row: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
  },
  cartRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 18,
  },
};

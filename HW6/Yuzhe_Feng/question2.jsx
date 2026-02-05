import { useMemo, useState } from "react";

const PRODUCTS = [
  { id: "A", name: "Product A", price: 15 },
  { id: "B", name: "Product B", price: 12.5 },
  { id: "C", name: "Product C", price: 20 },
];

function formatMoney(n) {
  return `$${n.toFixed(2)}`;
}

export default function App() {
  const [selectedId, setSelectedId] = useState(PRODUCTS[0].id);
  // Default "1"
  const [qty, setQty] = useState("1");
  // Cart：[{ id, name, price, quantity }]
  const [cart, setCart] = useState([]);

  // useMemo
  const selectedProduct = useMemo(() => {
    return PRODUCTS.find((p) => p.id === selectedId);
  }, [selectedId]);

  // Calculate
  const grandTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  function handleAdd() {
    const parsedQty = Number(qty);

    if (!selectedProduct) return;
    if (!Number.isFinite(parsedQty) || parsedQty <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    setCart((prev) => {
      // If item exist, ++
      const existing = prev.find((item) => item.id === selectedProduct.id);
      if (existing) {
        return prev.map((item) =>
          item.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + parsedQty }
            : item,
        );
      }

      // If not exist, add new
      return [
        ...prev,
        {
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          quantity: parsedQty,
        },
      ];
    });

    // set default back to 1
    setQty("1");
  }

  function handleRemove(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Mini Shopping Cart</h1>

      <div style={styles.card}>
        {/* Select */}
        <div style={styles.row}>
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            style={styles.select}
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
            onChange={(e) => setQty(e.target.value)}
            style={styles.input}
          />

          <button onClick={handleAdd} style={styles.addBtn}>
            Add
          </button>
        </div>

        <hr style={styles.hr} />

        {/* Cart */}
        <h2 style={styles.h2}>Cart</h2>

        {cart.length === 0 ? (
          <p style={{ margin: 0, opacity: 0.7 }}>Your cart is empty.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Item</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Quantity</th>
                <th style={styles.th}>Total</th>
                <th style={styles.th}></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const lineTotal = item.price * item.quantity;
                return (
                  <tr key={item.id}>
                    <td style={styles.td}>{item.name}</td>
                    <td style={styles.td}>{formatMoney(item.price)}</td>
                    <td style={styles.td}>{item.quantity}</td>
                    <td style={styles.td}>{formatMoney(lineTotal)}</td>
                    <td style={styles.tdRight}>
                      <button
                        onClick={() => handleRemove(item.id)}
                        style={styles.removeBtn}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        <hr style={styles.hr} />

        {/* Total */}
        <div style={styles.totalRow}>
          <span style={styles.totalLabel}>Total:</span>
          <span style={styles.totalValue}>{formatMoney(grandTotal)}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "system-ui, Arial, sans-serif",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
  },
  title: { fontSize: 30, margin: "10px 0 24px" },
  card: {
    width: "min(600px, 90vw)",
    border: "2px solid #333",
    borderRadius: 14,
    padding: 20,
  },
  row: { display: "flex", gap: 16, alignItems: "center" },
  select: {
    flex: 1,
    padding: 14,
    fontSize: 18,
    borderRadius: 10,
    border: "2px solid #333",
  },
  input: {
    width: 140,
    padding: 14,
    fontSize: 18,
    borderRadius: 10,
    border: "2px solid #333",
  },
  addBtn: {
    width: 140,
    padding: 14,
    fontSize: 18,
    borderRadius: 10,
    border: "2px solid #333",
    background: "#f3f3f3",
    cursor: "pointer",
  },
  hr: { margin: "18px 0", border: "none", borderTop: "2px solid #333" },
  h2: { fontSize: 25, margin: "4px 0 16px" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 18 },
  th: {
    textAlign: "left",
    borderBottom: "2px solid #333",
    paddingBottom: 10,
  },
  td: { padding: "14px 0", borderBottom: "1px solid #ddd" },
  tdRight: {
    padding: "14px 0",
    borderBottom: "1px solid #ddd",
    textAlign: "right",
  },
  removeBtn: {
    padding: "10px 16px",
    fontSize: 16,
    borderRadius: 10,
    border: "2px solid #333",
    background: "#f3f3f3",
    cursor: "pointer",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 26,
    fontWeight: 700,
  },
  totalLabel: { opacity: 0.9 },
  totalValue: { opacity: 0.9 },
};

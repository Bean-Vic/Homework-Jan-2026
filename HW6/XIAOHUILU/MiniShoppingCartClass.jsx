import React from "react";

export class MiniShoppingCartClass extends React.Component {
  constructor(props) {
    super(props);
    // product list
    this.products = [
      { id: 1, name: "Apple", price: 0.5 },
      { id: 2, name: "Banana", price: 0.3 },
      { id: 3, name: "Orange", price: 0.8 },
    ];
    // component state
    this.state = {
      selectedId: this.products[0].id,
      quantity: 1,
      cart:[]
    };
  }
    // event handlers
    // select change
    handleSelectChange = (event) => {
        this.setState({ selectedId: event.target.value});
    };
    // quantity change
    handleQtyChange = (event) => {
        this.setState({ quantity: event.target.value });
    };
    // add to cart
    handleAdd = () => {
        const qtyNumber = Number(this.state.quantity);
        if (qtyNumber <= 0) return;

        const product = this.products.find(p => p.id === Number(this.state.selectedId));
        if (!product) return;

        this.setState(prev => {
            const cartCopy = [...prev.cart];
            const idx = cartCopy.findIndex(x => x.id === product.id);

            if (idx === -1) {
                cartCopy.push({
                    ...product,
                    quantity: qtyNumber
                });
            } else {
                cartCopy[idx].quantity += qtyNumber;
            }

            return { cart: cartCopy, quantity: 1 };
        });
    };
    // remove from cart
    handleRemove = (id) => {
        this.setState((prev) => ({
            cart: prev.cart.filter(item => item.id !== id),
        }));
    };
    // calculate total
    getTotal = () => {
        return this.state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };
    // render
    render() {
        const total = this.getTotal();
        
        return (
            <div style={styles.page}>
        <h1 style={styles.title}>Mini Shopping Cart</h1>

        <div style={styles.card}>
          {/* dropdown + qty + add */}
          <div style={styles.topRow}>
            <select
              value={this.state.selectedId}
              onChange={this.handleSelectChange}
              style={styles.select}
            >
              {this.products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              min="1"
              value={this.state.qty}
              onChange={this.handleQtyChange}
              style={styles.input}
            />

            <button onClick={this.handleAdd} style={styles.addBtn}>
              Add
            </button>
          </div>

          <hr style={styles.line} />

          {/* cart section */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Cart</h2>

            {this.state.cart.length === 0 ? (
              <p style={{ margin: 0, color: "#666" }}>No items yet</p>
            ) : (
              this.state.cart.map((item) => (
                <div key={item.id} style={styles.itemRow}>
                  <div style={styles.itemLeft}>
                    {item.name} x {item.quantity}
                  </div>

                  <div style={styles.itemRight}>
                    <div style={styles.price}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>

                    <button
                      onClick={() => this.handleRemove(item.id)}
                      style={styles.removeBtn}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <hr style={styles.line} />

          {/* total section */}
          <div style={styles.totalRow}>
            <div style={styles.totalText}>Total:</div>
            <div style={styles.totalMoney}>${total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    );
  }
    
}
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 40,
    background: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: 20,
    fontSize: 44,
    fontWeight: 800,
    color: "#333",
  },
  card: {
    width: 520,
    background: "#fff",
    border: "2px solid #333",
    borderRadius: 10,
    padding: 18,
  },
  topRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },
  select: {
    flex: 1,
    height: 42,
    fontSize: 18,
    padding: "0 12px",
  },
  input: {
    width: 90,
    height: 38,
    fontSize: 18,
    padding: "0 10px",
  },
  addBtn: {
    width: 90,
    height: 42,
    fontSize: 18,
    cursor: "pointer",
  },
  line: {
    margin: "16px -18px",
    border: "none",
    borderTop: "2px solid #333",
  },
  section: {
    padding: "6px 0",
  },
  sectionTitle: {
    margin: "0 0 12px 0",
    fontSize: 28,
  },
  itemRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
  },
  itemLeft: {
    fontSize: 22,
  },
  itemRight: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  price: {
    fontSize: 22,
    minWidth: 110,
    textAlign: "right",
  },
  removeBtn: {
    height: 36,
    fontSize: 16,
    padding: "0 12px",
    cursor: "pointer",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 6,
  },
  totalText: {
    fontSize: 26,
    fontWeight: 700,
  },
  totalMoney: {
    fontSize: 26,
    fontWeight: 700,
  },
};

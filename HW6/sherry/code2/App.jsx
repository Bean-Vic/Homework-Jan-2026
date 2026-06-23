import React from "react";
import "./styles.css";
const PRODUCTS = {
  A: {
    label: "Product A",
    price: 15,
  },
  B: {
    label: "Product B",
    price: 10,
  },
  C: {
    label: "Product C",
    price: 30,
  },
};
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedItem: "A",
      quantity: 1,
      cart: [],
    };
  }
  handleItem = (e) => {
    this.setState({ selectedItem: e.target.value });
  };
  handleQuantity = (e) => {
    this.setState({ quantity: Number(e.target.value) });
  };
  handleAdd = () => {
    const { selectedItem, quantity, cart } = this.state;
    let found = false;

    const newCart = cart.map((item) => {
      if (item.selectedItem === selectedItem) {
        found = true;
        return {
          ...item,
          quantity: item.quantity + quantity,
        };
      }
      return item;
    });

    if (!found) {
      newCart.push({
        selectedItem,
        quantity,
      });
    }

    this.setState({ cart: newCart });
  };
  handleDelete = (itemToDelete) => {
    const newCart = this.state.cart.filter(
      (item) => item.selectedItem !== itemToDelete,
    );
    this.setState({ cart: newCart });
  };
  render() {
    const total = this.state.cart.reduce((sum, c) => {
      return sum + PRODUCTS[c.selectedItem].price * c.quantity;
    }, 0);
    return (
      <div className="app">
        <h2>Mini Shopping Cart</h2>
        <div className="content">
          <div className="input">
            <select value={this.state.selectedItem} onChange={this.handleItem}>
              <option value="A">Product A</option>
              <option value="B">Product B</option>
              <option value="C">Product C</option>
            </select>
            <input
              type="number"
              value={this.state.quantity}
              onChange={this.handleQuantity}
              min="1"
            />
            <button onClick={this.handleAdd}>Add</button>
          </div>
          <div className="cart">
            <p>
              <strong>Cart</strong>
            </p>
            {this.state.cart.map((c, _) => (
              <div key={c.selectedItem} className="cart-item">
                <div>
                  <span>
                    {PRODUCTS[c.selectedItem].label} × {c.quantity}
                  </span>
                </div>
                <span>
                  ${(PRODUCTS[c.selectedItem].price * c.quantity).toFixed(2)}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => this.handleDelete(c.selectedItem)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="total">
            <div>Total</div>
            <div>${total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    );
  }
}

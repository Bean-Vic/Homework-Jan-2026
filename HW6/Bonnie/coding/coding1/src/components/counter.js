import React from "react";

function withLocalStorageCache(WrappedComponent, storageKey = "counter_value") {
  return class WithLocalStorageCache extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          storageKey={storageKey}
          useCache={true}
        />
      );
    }
  };
}

/**
 * Class Component: Counter
 * a) initial value from props
 * b) manage its own state
 * c) render current state
 * d) buttons to inc/dec
 * e) (Extra) cooperate with HOC using localStorage
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);

    const { initialValue = 0, useCache, storageKey } = props;

    let startValue = Number(initialValue);

    if (useCache && storageKey) {
      const cached = localStorage.getItem(storageKey);
      if (cached !== null && cached !== "" && !Number.isNaN(Number(cached))) {
        startValue = Number(cached);
      }
    }

    this.state = { value: startValue };
  }

  componentDidUpdate(prevProps, prevState) {
    const { useCache, storageKey } = this.props;
    if (useCache && storageKey && prevState.value !== this.state.value) {
      localStorage.setItem(storageKey, String(this.state.value));
    }
  }

  increase = () => {
    this.setState((prev) => ({ value: prev.value + 1 }));
  };

  decrease = () => {
    this.setState((prev) => ({ value: prev.value - 1 }));
  };

  render() {
    return (
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">1) Class Counter</h2>
        <p className="mt-2 text-gray-600">
          Current value:{" "}
          <span className="font-bold text-indigo-600">{this.state.value}</span>
        </p>

        <div className="mt-4 flex gap-3">
          <button
            onClick={this.decrease}
            className="rounded-xl bg-gray-100 px-4 py-2 font-medium hover:bg-gray-200"
          >
            -
          </button>
          <button
            onClick={this.increase}
            className="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
          >
            +
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Props initialValue: <b>{this.props.initialValue}</b> | Cache:{" "}
          <b>{this.props.useCache ? "ON" : "OFF"}</b>
        </p>
      </div>
    );
  }
}

// 使用 HOC 包装 Counter（Extra Credit）
const CachedCounter = withLocalStorageCache(Counter, "hw6_counter_cache");

/**
 * 2) Mini Shopping Cart
 * - dropdown choose item
 * - input quantity
 * - add to cart
 * - table summary
 * - delete item (extra)
 */
const ITEMS = [
  { id: "apple", name: "Apple", price: 1.5 },
  { id: "banana", name: "Banana", price: 0.9 },
  { id: "milk", name: "Milk", price: 3.2 },
  { id: "bread", name: "Bread", price: 2.6 },
];

class MiniCart extends React.Component {
  state = {
    selectedId: ITEMS[0].id,
    quantity: 1,
    cart: [], // { id, name, price, quantity }
    error: "",
  };

  handleSelect = (e) => {
    this.setState({ selectedId: e.target.value, error: "" });
  };

  handleQty = (e) => {
    this.setState({ quantity: e.target.value, error: "" });
  };

  addToCart = () => {
    const qtyNum = Number(this.state.quantity);

    if (!Number.isInteger(qtyNum) || qtyNum <= 0) {
      this.setState({ error: "Quantity must be a positive integer." });
      return;
    }

    const item = ITEMS.find((x) => x.id === this.state.selectedId);
    if (!item) {
      this.setState({ error: "Invalid item." });
      return;
    }

    // 如果已存在该 item，就累加数量（更符合购物车逻辑）
    this.setState((prev) => {
      const existing = prev.cart.find((c) => c.id === item.id);
      let nextCart;

      if (existing) {
        nextCart = prev.cart.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + qtyNum } : c
        );
      } else {
        nextCart = [
          ...prev.cart,
          { id: item.id, name: item.name, price: item.price, quantity: qtyNum },
        ];
      }

      return { cart: nextCart, quantity: 1, error: "" };
    });
  };

  deleteItem = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.filter((c) => c.id !== id),
    }));
  };

  getGrandTotal = () => {
    return this.state.cart.reduce(
      (sum, c) => sum + c.price * c.quantity,
      0
    );
  };

  render() {
    return (
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">2) Mini Shopping Cart</h2>
        <p className="mt-2 text-gray-600">
          Choose an item, enter quantity, then add to cart.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Item
            </label>
            <select
              value={this.state.selectedId}
              onChange={this.handleSelect}
              className="w-full rounded-xl border px-3 py-2"
            >
              {ITEMS.map((it) => (
                <option key={it.id} value={it.id}>
                  {it.name} (${it.price})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              value={this.state.quantity}
              onChange={this.handleQty}
              className="w-full rounded-xl border px-3 py-2"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={this.addToCart}
              className="w-full rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {this.state.error && (
          <div className="mt-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {this.state.error}
          </div>
        )}

        <div className="mt-5 overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl border">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-3 py-2 text-left text-sm">Item</th>
                <th className="px-3 py-2 text-left text-sm">Price</th>
                <th className="px-3 py-2 text-left text-sm">Quantity</th>
                <th className="px-3 py-2 text-left text-sm">Total</th>
                <th className="px-3 py-2 text-left text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cart.length === 0 ? (
                <tr>
                  <td className="px-3 py-3 text-gray-500" colSpan="5">
                    Cart is empty.
                  </td>
                </tr>
              ) : (
                this.state.cart.map((c, idx) => (
                  <tr
                    key={c.id}
                    className={idx % 2 === 1 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-3 py-2">{c.name}</td>
                    <td className="px-3 py-2">${c.price.toFixed(2)}</td>
                    <td className="px-3 py-2">{c.quantity}</td>
                    <td className="px-3 py-2">
                      ${(c.price * c.quantity).toFixed(2)}
                    </td>
                    <td className="px-3 py-2">
                      <button
                        onClick={() => this.deleteItem(c.id)}
                        className="rounded-lg bg-red-500 px-3 py-1 text-sm font-medium text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {this.state.cart.length > 0 && (
              <tfoot>
                <tr className="bg-indigo-50">
                  <td className="px-3 py-2 font-semibold" colSpan="3">
                    Grand Total
                  </td>
                  <td className="px-3 py-2 font-semibold">
                    ${this.getGrandTotal().toFixed(2)}
                  </td>
                  <td className="px-3 py-2"></td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>
    );
  }
}



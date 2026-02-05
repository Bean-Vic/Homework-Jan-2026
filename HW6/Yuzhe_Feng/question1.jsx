import React from "react";

// HOC: with LocalStorage Cache
function LocalStorage(WrappedComponent, storageKey = "counter_value") {
  return class WithCache extends React.Component {
    getInitialValue = () => {
      const cached = localStorage.getItem(storageKey);
      if (cached === null) return null;

      const num = Number(cached);
      return Number.isNaN(num) ? null : num;
    };

    handleValueChange = (newValue) => {
      // write/update cache
      localStorage.setItem(storageKey, String(newValue));
    };

    render() {
      const cachedValue = this.getInitialValue();

      // if cache exists use it; otherwise use props.initialValue
      const finalInitialValue =
        cachedValue !== null ? cachedValue : this.props.initialValue;

      return (
        <WrappedComponent
          {...this.props}
          initialValue={finalInitialValue}
          onValueChange={this.handleValueChange}
        />
      );
    }
  };
}

// Component: Counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };
  }

  handleIncrease = () => {
    this.setState(
      (prev) => ({ value: prev.value + 1 }),
      () => {
        //notify parent(HOC)
        this.props.onValueChange?.(this.state.value);
      },
    );
  };

  handleDecrease = () => {
    this.setState(
      (prev) => ({ value: prev.value - 1 }),
      () => {
        this.props.onValueChange?.(this.state.value);
      },
    );
  };

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Counter</h2>

        <div style={styles.value}>
          Current Value: <strong>{this.state.value}</strong>
        </div>

        <div style={styles.buttons}>
          <button onClick={this.handleDecrease} style={styles.button}>
            Decrease
          </button>

          <button onClick={this.handleIncrease} style={styles.button}>
            Increase
          </button>
        </div>

        <p style={styles.hint}>Value is cached in localStorage.</p>
      </div>
    );
  }
}

// Wrap Counter with HOC
const CounterWithCache = LocalStorage(Counter, "my_counter_cache");

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <CounterWithCache initialValue={5} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 420,
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 12,
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  },
  title: {
    marginTop: 0,
  },
  value: {
    fontSize: 20,
    marginBottom: 14,
  },
  buttons: {
    display: "flex",
    gap: 10,
  },
  button: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #bbb",
    cursor: "pointer",
  },
  hint: {
    marginTop: 14,
    color: "#666",
    fontSize: 14,
  },
};

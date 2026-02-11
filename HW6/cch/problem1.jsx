import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialValue ?? 0,
    };
  }

  increase = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  decrease = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <h2>Count: {count}</h2>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.increase} style={{ marginLeft: 10 }}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;

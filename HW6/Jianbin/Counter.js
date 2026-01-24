import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
    };
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrease = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>Current Value: {this.state.value}</p>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default Counter;

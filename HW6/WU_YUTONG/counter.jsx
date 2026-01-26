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
    const value = this.state.value;

    return (
      <div>
        <h2>Counter</h2>

        <p>Current value: {value}</p>

        <button onClick={this.decrease}>Decrease</button>

        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default Counter;

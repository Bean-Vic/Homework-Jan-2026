import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.initialValue,
    };
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 }, () => {
      if (this.props.saveValue) {
        this.props.saveValue(this.state.value);
      }
    });
  };

  decrease = () => {
    this.setState({ value: this.state.value - 1 }, () => {
      if (this.props.saveValue) {
        this.props.saveValue(this.state.value);
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>Current value: {this.state.value}</p>

        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default Counter;


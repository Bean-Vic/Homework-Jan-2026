import React from "react";

export default class Counter extends React.Component {
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
        <div>{this.state.value}</div>
        <button onClick={this.increase}>increase</button>
        <br />
        <button onClick={this.decrease}>decrease</button>
      </div>
    );
  }
}

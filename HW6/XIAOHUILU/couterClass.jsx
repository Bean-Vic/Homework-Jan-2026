import React from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue ?? 0 ,// Use initialValue prop or default to 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.props.onValueChange?.(this.state.count + 1);
  }

    decrement = () => {
    this.setState({ count: this.state.count - 1 });
    this.props.onValueChange?.(this.state.count - 1);
  }
    render() {   
    return (
      <div>
        <h2>Class Counter: {this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
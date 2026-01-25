import React from "react";

// this is a HOC that adds localStorage caching to a CounterClass component
// keyName is the localStorage key to use
export function withLocalStorageCounter(CounterClass, keyName = "count") {
  return class Wrapper extends React.Component {
    constructor(props) {
      super(props);

      // read from localStorage
      const saved = localStorage.getItem(keyName);

      // 2) if nothing in localStorage, use initialValue prop or default to 0
      const initValue =
        saved !== null ? Number(saved) : (props.initialValue ?? 0);

      this.state = {
        value: initValue,
      };
    }

    // 3) if value changes, write to localStorage
    componentDidUpdate(prevProps, prevState) {
      if (prevState.value !== this.state.value) {
        localStorage.setItem(keyName, String(this.state.value));
      }
    }

    // get notified when CounterClass value changes
    handleValueChange = (newValue) => {
      this.setState({ value: newValue });
    };

    render() {
      return (
        <CounterClass
          {...this.props}
          initialValue={this.state.value}
          onValueChange={this.handleValueChange}
        />
      );
    }
  };
}
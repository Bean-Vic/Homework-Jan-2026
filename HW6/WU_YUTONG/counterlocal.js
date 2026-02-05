import React from "react";

export function counterlocal(component, key) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      const saved = localStorage.getItem(key);
      const savedNumber = Number(saved);

      if (saved !== null) {
        this.initialValue = savedNumber;
      } else {
        this.initialValue = props.initialValue;
      }
    }

    handleSaveValue = (value) => {
      localStorage.setItem(key, value);
    };

    render() {
      return (
        <component
          {...this.props}
          initialValue={this.initialValue}
          saveValue={this.handleSaveValue}
        />
      );
    }
  };
}

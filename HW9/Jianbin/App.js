import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h2>Redux Counter</h2>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;

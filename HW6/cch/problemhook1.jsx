import { useState } from "react";

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* c. 显示 state */}
      <h2>Count: {count}</h2>

      {/* d. 两个按钮 */}
      <button onClick={decrease}>-</button>
      <button onClick={increase} style={{ marginLeft: 10 }}>
        +
      </button>
    </div>
  );
}

export default Counter;

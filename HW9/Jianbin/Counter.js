import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

/* ---------- Hooks version ---------- */
function CounterWithHooks() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter (useSelector / useDispatch)</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

/* ---------- connect version ---------- */
function CounterWithConnect({ count, increment, decrement }) {
  return (
    <div>
      <h3>Counter (connect / mapDispatchToProps)</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counter.value,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterWithConnect);

/* ---------- Export both ---------- */
export default function Counter() {
  return (
    <div>
      <CounterWithHooks />
      <ConnectedCounter />
    </div>
  );
}

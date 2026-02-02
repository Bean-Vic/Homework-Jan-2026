import "./App.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { increment, decrement } from "./store/counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      {/* useDispatch */}
      <h2>useDispatch</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {/* mapDispatchToProps */}
      <h2>mapDispatchToProps</h2>
      <ConnectedButtons />
    </div>
  );
}

const ConnectedButtons = connect(null, (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
}))(({ increment, decrement }) => (
  <div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
));

export default App;

import CounterClass from "./components/CounterClass";
import MiniCart from "./components/MiniShoppingCart";
import "./App.css";


function App() {
  return (
      <div className="page">
        <h1>HW6 React Project</h1>
        <div className="section">
          <CounterClass initialValue={0} />
        </div>
        <div className="section">
          <MiniCart />
        </div>
      </div>
  )
}

export default App;

import './App.css';
import { CounterConnected, CounterHooks } from "./CounterRedux";
//const CounterWithCache = withLocalStorageCounter(CounterClass, "my_Counter")
function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Redux Counter Assignment</h1>

      {/* Connected version: mapStateToProps / mapDispatchToProps */}
      <CounterConnected/>

      {/* Hooks version: useSelector / useDispatch + localStorage extra credit */}
      <CounterHooks storageKey="count" />
    </div>    

  );
}

export default App;

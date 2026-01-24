import './App.css';
import CounterClass from './components/CounterClass';
import getLocalStorageCache from './components/LocalStorageCache';

const CounterWithLocalStorage = getLocalStorageCache(CounterClass, "counterValue");

function App() {
  return (
    <>
    <div className="App">
      <CounterWithLocalStorage initialValue={1} />
    </div>
    </>
  );
}

export default App;

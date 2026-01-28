function App() {
  return (
    <div>
      <Counter initialValue={0} />
      <hr />
      <ShoppingCart />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

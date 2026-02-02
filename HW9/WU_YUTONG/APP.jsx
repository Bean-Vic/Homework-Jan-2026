import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { increase, decrease, setValue } from "./store/counterReducer";

const STORAGE_KEY = "saved_counter";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCount = localStorage.getItem(STORAGE_KEY);

    if (storedCount !== null) {
      const savedCount = Number(storedCount);

      if (savedCount >= 0 || savedCount < 0) {
        dispatch(setValue(savedCount));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(props.count));
  }, [props.count]);

  return (
    <div>
     
      <p>Current value: {props.count}</p>

      <hr />

      <h3>Update value using mapDispatchToProps</h3>
      <button onClick={props.increaseByProps}>+1 (props)</button>
      <button onClick={props.decreaseByProps}>-1 (props)</button>

      <hr />

      <h3>Update value using useDispatch</h3>
      <button onClick={() => dispatch(increase())}>+1 (hook)</button>
      <button onClick={() => dispatch(decrease())}>-1 (hook)</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseByProps: () => dispatch(increase()),
    decreaseByProps: () => dispatch(decrease()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

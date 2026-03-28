import React, { useEffect ,useRef} from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { decrement, increment, setValue } from "./counterSlice";

/**
 * ----------------------------
 * A) Connected version (mapStateToProps / mapDispatchToProps)
 * ----------------------------
 */
function CounterConnectedUI({ value, inc, dec }) {
  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Connected Counter (connect)</h2>
      <p style={valueStyle}>Count: {value}</p>

      <div style={rowStyle}>
        <button onClick={inc} style={btnStyle}>+ (mapDispatchToProps)</button>
        <button onClick={dec} style={btnStyle}>- (mapDispatchToProps)</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.counter.value,
});

const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch(increment()),
  dec: () => dispatch(decrement()),
});

export const CounterConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterConnectedUI);

/**
 * ----------------------------
 * B) Hooks version (useSelector / useDispatch) + localStorage extra credit
 * ----------------------------
 */
export function CounterHooks({ storageKey = "count" }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  const latestValueRef = useRef(value);
  latestValueRef.current = value; // keep latest value

  useEffect(() => {
    // mount: read localStorage
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) {
      const num = Number(saved);
      if (!Number.isNaN(num)) {
        dispatch(setValue(num));
      }
    }

    // unmount: save latest value
    return () => {
      localStorage.setItem(storageKey, String(latestValueRef.current));
    };
  }, [dispatch, storageKey]);

  const onInc = () => dispatch(increment());
  const onDec = () => dispatch(decrement());

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Hooks Counter (useSelector / useDispatch)</h2>
      <p style={valueStyle}>Count: {value}</p>

      <div style={rowStyle}>
        <button onClick={onInc} style={btnStyle}>+ (useDispatch)</button>
        <button onClick={onDec} style={btnStyle}>- (useDispatch)</button>
      </div>

      <p style={hintStyle}>
        Extra credit: read from localStorage on mount, save on unmount (key: <b>{storageKey}</b>)
      </p>
    </div>
  );
}

/** ---------- simple inline styles (bonus: “look pretty”) ---------- */
const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: 12,
  padding: 16,
  margin: "16px 0",
  maxWidth: 520,
};

const titleStyle = { margin: 0, marginBottom: 12 };
const valueStyle = { fontSize: 20, margin: "8px 0 12px" };
const rowStyle = { display: "flex", gap: 12 };
const btnStyle = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #ccc",
  cursor: "pointer",
};
const hintStyle = { marginTop: 12, fontSize: 12, color: "#555" };
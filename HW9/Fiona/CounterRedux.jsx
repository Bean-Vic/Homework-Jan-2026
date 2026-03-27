// src/components/hw9/CounterRedux.jsx
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/hw9/counterReduxSlice";
import CounterReduxConnected from "./CounterReduxConnected";

import "./CounterRedux.css";

export default function counterRedux() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <section className="hw9-counter-card">
            <h2>Current Count: {count}</h2>

            {/*useDispatch version*/}
            <div className="hw9-btn">
                <div className="hw9-btn-dispatch">
                    <h4>Dispatch Version </h4>
                    <button type="button" onClick={() => dispatch(increment())}>+</button>
                    <button type="button" onClick={() => dispatch(decrement())}>-</button>
                </div>
            </div>
            {/*mapDispatch version*/}
            <div className="hw9-btn">
                <CounterReduxConnected />
            </div>

        </section>

    )
}
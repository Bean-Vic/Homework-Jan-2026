import React, { useEffect, useRef } from "react";
import { Provider, useDispatch, useSelector, connect } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

/*Redux Slice */

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0, // initial value initialized by reducer
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { increment, decrement, setValue } = counterSlice.actions;

/*Redux Store*/

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

/*Buttons using connect + mapDispatchToProps */

function ConnectedButtons({ onInc, onDec }) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onDec}
        aria-label="decrement using connect"
        className="flex-1 px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90 active:scale-[0.98]"
      >
        -1
      </button>
      <button
        onClick={onInc}
        aria-label="increment using connect"
        className="flex-1 px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90 active:scale-[0.98]"
      >
        +1
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onInc: () => dispatch(increment()),
  onDec: () => dispatch(decrement()),
});

const ConnectedButtonsWithRedux = connect(
  null,
  mapDispatchToProps,
)(ConnectedButtons);

/* Main Counter Component */

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  /* localStorage */
  const STORAGE_KEY = "counter_value";
  const latestValueRef = useRef(value);

  // always keep ref as latest value
  useEffect(() => {
    latestValueRef.current = value;
  }, [value]);

  // UNSOLVED: mount: read cache; unmount: write cache
  useEffect(() => {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached !== null) {
      const parsed = Number(cached);
      if (!Number.isNaN(parsed)) {
        dispatch(setValue(parsed));
      }
    }

    return () => {
      localStorage.setItem(STORAGE_KEY, String(latestValueRef.current));
    };
  }, [dispatch]);

  useEffect(() => {
    const persist = () => {
      localStorage.setItem(STORAGE_KEY, String(latestValueRef.current));
    };

    window.addEventListener("pagehide", persist);
    window.addEventListener("beforeunload", persist);

    return () => {
      window.removeEventListener("pagehide", persist);
      window.removeEventListener("beforeunload", persist);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100
                    flex items-center justify-center p-6"
    >
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-lg
                      border border-slate-200 overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Redux Counter</h1>
          <p className="mt-1 text-sm text-slate-600">
            CRA · Redux Toolkit · Tailwind
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Value */}
          <div className="text-center">
            <div className="text-sm text-slate-500">Current Value</div>
            <div className="text-5xl font-extrabold text-slate-900">
              {value}
            </div>
          </div>

          {/* connect buttons */}
          <div className="space-y-2">
            <div className="text-sm font-semibold text-slate-700">
              connect + mapDispatchToProps
            </div>
            <ConnectedButtonsWithRedux />
          </div>

          {/* hook buttons */}
          <div className="space-y-2">
            <div className="text-sm font-semibold text-slate-700">
              useDispatch
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => dispatch(decrement())}
                aria-label="decrement using hook"
                className="flex-1 px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90 active:scale-[0.98]"
              >
                −1
              </button>
              <button
                onClick={() => dispatch(increment())}
                aria-label="increment using hook"
                className="flex-1 px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90 active:scale-[0.98]"
              >
                +1
              </button>
            </div>
          </div>

          {/* reset */}
          <button
            onClick={() => dispatch(setValue(0))}
            className="w-full mt-2 px-4 py-2 rounded-xl border
                       border-slate-300 text-slate-700 hover:bg-slate-100"
          >
            Reset
          </button>

          <p className="text-xs text-center text-slate-500">
            Value is cached in localStorage on unmount.
          </p>
        </div>
      </div>
    </div>
  );
}

/*App (Provider)*/

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

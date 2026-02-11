import React from "react";
import { Provider, connect, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

/* =========================
   Redux Slice
========================= */

const counterSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
		history: [],
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
			state.history.push({
				value: state.value,
				timestamp: Date.now(),
			});
		},
		decrement: (state) => {
			state.value -= 1;
			state.history.push({
				value: state.value,
				timestamp: Date.now(),
			});
		},
	},
});

const { increment, decrement } = counterSlice.actions;

/* =========================
   Store
========================= */

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});

/* =========================
   Connect (Legacy)
========================= */

const CounterConnectComponent = ({ count, increment, decrement }) => {
	return (
		<div className="bg-white/80 p-8 rounded-3xl shadow-xl">
			<h2 className="font-bold mb-4">Connect HOC</h2>
			<div className="text-5xl mb-6">{count}</div>
			<div className="flex gap-4">
				<button onClick={decrement} className="px-4 py-2 bg-gray-200 rounded">
					-
				</button>
				<button onClick={increment} className="px-4 py-2 bg-emerald-500 text-white rounded">
					+
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	count: state.counter.value,
});

const CounterConnect = connect(mapStateToProps, {
	increment,
	decrement,
})(CounterConnectComponent);

/* =========================
   Hooks (Modern)
========================= */

const CounterHooks = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="bg-white/80 p-8 rounded-3xl shadow-xl">
			<h2 className="font-bold mb-4">Hooks</h2>
			<div className="text-5xl mb-6">{count}</div>
			<div className="flex gap-4">
				<button
					onClick={() => dispatch(decrement())}
					className="px-4 py-2 bg-gray-200 rounded"
				>
					-
				</button>
				<button
					onClick={() => dispatch(increment())}
					className="px-4 py-2 bg-indigo-500 text-white rounded"
				>
					+
				</button>
			</div>
		</div>
	);
};


/* =========================
   Page
========================= */
const CounterRedux = () => {
	return (
		<Provider store={store}>
			<div className="min-h-screen flex items-center justify-center bg-slate-100">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<CounterConnect />
					<CounterHooks />
				</div>
			</div>
		</Provider>
	);
};

export default CounterRedux;
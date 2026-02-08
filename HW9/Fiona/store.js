// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./hw9/counterReduxSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state) {
      state.value = state.value + 1;
    },

    decrease(state) {
      state.value = state.value - 1;
    },

    setValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { increase, decrease, setValue } = counterReducer.actions;

export default counterReducer.reducer;

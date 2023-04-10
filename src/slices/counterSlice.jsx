import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    clearAll: () => [],
  },
});

export const { increment, decrement, clearAll } = counterSlice.actions;
export default counterSlice.reducer;

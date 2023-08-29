import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  showCounter: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.value++;
    },

    decrement(state) {
      state.value--;
    },

    increaseByAmount(state, action) {
      state.value = state.value + action.payload;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, increaseByAmount, toggleCounter } = counterSlice.actions;

export default counterSlice.reducer;

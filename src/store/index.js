import { createStore } from 'redux';

const initialState = {
  counter: 0,
  toggleCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
        toggleCounter: state.toggleCounter,
      };

    case 'incrementByAmount':
      return {
        counter: state.counter + action.amount,
        toggleCounter: state.toggleCounter,
      };

    case 'decrement':
      return {
        counter: state.counter - 1,
        toggleCounter: state.toggleCounter,
      };

    case 'toggleCounter':
      return {
        toggleCounter: !state.toggleCounter,
        counter: state.counter,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;

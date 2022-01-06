import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementBy5Handler = () => {
    dispatch(counterActions.incrementby_5({ amount: 5 }));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <Fragment>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={decrementHandler}>-</button>
            <button onClick={incrementHandler}>+</button>
            <button onClick={incrementBy5Handler}>+ 5</button>
          </div>
        </Fragment>
      )}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

import { createStore } from 'redux';

// Action Generators -  functions that return action object
// used to prevent the console from showing no errors
// when directly passing an object with typo in properties

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({ type: 'RESET' });

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// Reducers
// 1. Pure functions - don't rely on variables of the outside scope
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };
    case 'DECREMENT':
      return { count: state.count - action.decrementBy };
    case 'SET':
      return { count: action.count };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => console.log(store.getState()));

// Action - an object that gets sent to the store
// increment the count
// store.dispatch({
//   type: 'INCREMENT', // uppercase convention for Action
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// RESET - set the count equal to zero
store.dispatch(resetCount());

// decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// SET - set the count to the provided value
store.dispatch(setCount({ count: 101 }));

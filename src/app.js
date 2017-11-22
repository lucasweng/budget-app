import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// addExpense -> Water bill
store.dispatch(addExpense({ description: 'Water bill' }));

// addExpense -> Gas bill
store.dispatch(addExpense({ description: 'Gas bill' }));

// setTextFilter -> bill (2 items) -> water (1 item)
// store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

// getVisibleExpense -> print visible ones to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));

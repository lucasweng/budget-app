import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.map(expense => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))
    }
  </div>
);

const mapStateToProps = state => ({
  // state = store that is being passed from app.js
  expenses: selectExpenses(state.expenses, state.filters)
});

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps)(ExpenseList);

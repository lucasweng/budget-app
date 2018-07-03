import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// export ExpenseList for testing
export const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        // props.expenses is the state passed from mapStateToProps
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
          props.expenses.map(expense => (
            <ExpenseListItem key={expense.id} {...expense} />
          ))
        )
      }
    </div>
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

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({
  databaseExpensesCount,
  expensesCount,
  expensesTotal,
  username,
  hiddenExpensesCount
}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const hiddenExpenseWord = hiddenExpensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
         Hi {username},
        </h2>
        {
          databaseExpensesCount === 0 && expensesCount === 0 ? (
            <h2 className="page-header__title">
              Need to keep track of some expenses?
            </h2>
          ) : (
            <h2 className="page-header__title">
              You are viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
            </h2>
          )
        }
        {hiddenExpensesCount !== 0 && <p>{hiddenExpensesCount} hidden {hiddenExpenseWord}</p>}
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const hiddenExpensesCount = state.expenses.length - visibleExpenses.length;

  return {
    databaseExpensesCount: state.expenses.length,
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    username: state.auth.firstname,
    hiddenExpensesCount
  };
};

ExpensesSummary.propTypes = {
  databaseExpensesCount: PropTypes.number.isRequired,
  expensesCount: PropTypes.number.isRequired,
  expensesTotal: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  hiddenExpensesCount: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(ExpensesSummary);

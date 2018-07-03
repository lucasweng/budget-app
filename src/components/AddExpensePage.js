import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

// export class for testing
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // this.props.dispatch(addExpense(expense));
    this.props.startAddExpense(expense);
    // automate redirect after submitting the form
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    )
  }
}

// return an object as a Redux action creator
const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

AddExpensePage.propTypes = {
  startAddExpense: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

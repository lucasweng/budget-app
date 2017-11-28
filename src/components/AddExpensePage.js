import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

// export class for testing
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // this.props.dispatch(addExpense(expense));
    this.props.addExpense(expense);
    // automate redirect after submitting the form
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

// return an object as a Redux action creator
const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense))
});

AddExpensePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

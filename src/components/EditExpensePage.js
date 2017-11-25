import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


const EditExpensePage = props => (
  <div>
    <ExpenseForm
      // props.expense is the state passed from mapStateToProps
      expense={props.expense}
      onSubmit={(expense) => {
        // Dispatch the action to edit the expense
        props.dispatch(editExpense(props.expense.id, expense));
        // redirect to the dashboard
        props.history.push('/');
      }}
    />
    <button
      onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => ({
  // props.match.params.id is expense.id passed from ExpenseListItem <- ExpenseList
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

EditExpensePage.propTypes = {
  expense: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(mapStateToProps)(EditExpensePage);

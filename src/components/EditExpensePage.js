import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// Refactor EditExpensePage to be a class based component for better performance
// check https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md#no-bind-or-arrow-functions-in-jsx-props-reactjsx-no-bind
// export class for testing
export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm
          // this.props.expense is the state.expense passed from mapStateToProps
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  // props.match.params.id is expense.id passed from ExpenseListItem <- ExpenseList
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: ({ id }) => dispatch(removeExpense({ id }))
});

EditExpensePage.propTypes = {
  expense: PropTypes.shape().isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

// ======================= Functional Component ============================
// const EditExpensePage = props => (
//   <div>
//     <ExpenseForm
//       // props.expense is the state.expense passed from mapStateToProps
//       expense={props.expense}
//       onSubmit={(expense) => {
//         // Dispatch the action to edit the expense
//         props.dispatch(editExpense(props.expense.id, expense));
//         // redirect to the dashboard
//         props.history.push('/');
//       }}
//     />
//     <button
//       onClick={() => {
//         props.dispatch(removeExpense({ id: props.expense.id }));
//         props.history.push('/');
//       }}
//     >
//       Remove
//     </button>
//   </div>
// );
// ======================= End Functional Component ============================

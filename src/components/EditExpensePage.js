import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ConfirmRemovalModal from './ConfirmRemovalModal';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

// Refactor EditExpensePage to be a class based component for better performance
// check https://goo.gl/EYjYLo
// export class for testing
export class EditExpensePage extends React.Component {
  state = {
    isModalOpen: false
  };
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onToggleModal = () => {
    this.setState(() => ({ isModalOpen: !this.state.isModalOpen}));
  };
  onRemove = () => {
    this.setState(() => ({ isModalOpen: false }));
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            // this.props.expense is the state.expense passed from mapStateToProps
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onToggleModal}>
            Remove Expense
          </button>
        </div>
        <ConfirmRemovalModal
          expense={this.props.expense}
          isModalOpen={this.state.isModalOpen}
          onToggleModal={this.onToggleModal}
          onRemove={this.onRemove}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  // props.match.params.id is expense.id passed from ExpenseListItem <- ExpenseList
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: ({ id }) => dispatch(startRemoveExpense({ id }))
});

EditExpensePage.propTypes = {
  expense: PropTypes.shape().isRequired,
  startEditExpense: PropTypes.func.isRequired,
  startRemoveExpense: PropTypes.func.isRequired,
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

import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    // props.expense is passed from EditExpensePage
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      note: props.expense ? props.expense.note : '',
      calendarFocused: false,
      errorDescription: '',
      errorAmount: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description, errorDescription: '' }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    // allow users to delete the whole value/leave input empty
    // allow input to begin with numbers with at most 2 decimal places
    // no letters allowed
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount, errorAmount: '' }));
    }
  };
  onDateChange = (createdAt) => {
    // prevent users from deleting value
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    // input validation
    if (!this.state.description || !this.state.amount) {
      if (!this.state.description) {
        this.setState(() => ({ errorDescription: 'Please provide description' }));

      }
      if (!this.state.amount) {
        this.setState(() => ({ errorAmount: 'Please provide amount' }));
      } 
    } else {
      // Clear the error
      this.setState(() => ({
        errorDescription: '',
        errorAmount: ''
      }));
      // Pass newly created expense to AddExpensePage and EditExpensePage
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100, // parse string into number (unit: penny)
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.errorDescription && <p className="form__error">{this.state.errorDescription}</p>}
        <input
          className={this.state.errorDescription ? "text-input text-input__error" : "text-input"}
          type="text"
          placeholder="Description"
          value={this.state.description}
          autoFocus
          onChange={this.onDescriptionChange}
        />
        {this.state.errorAmount && <p className="form__error">{this.state.errorAmount}</p>}
        <input
          className={this.state.errorAmount ? "text-input text-input__error" : "text-input"}
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false} // allow selecting past days
          showDefaultInputIcon
          hideKeyboardShortcutsPanel
          block
        />
        <textarea
          className="textarea"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}

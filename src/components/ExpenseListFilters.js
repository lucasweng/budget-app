import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        } else if (e.target.value === 'amount') {
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

ExpenseListFilters.propTypes = {
  filters: PropTypes.shape({
    text: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(ExpenseListFilters);

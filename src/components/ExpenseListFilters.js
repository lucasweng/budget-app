import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

ExpenseListFilters.propTypes = {
  filters: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(ExpenseListFilters);

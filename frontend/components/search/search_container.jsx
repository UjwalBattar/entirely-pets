import { connect } from 'react-redux';
import React from 'react';

import { updateFilter } from '../../actions/filter_actions';
import { fetchProducts } from '../../actions/product_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  products: asArray(state.entities),
  animal: state.ui.filters.animal,
  category: state.ui.filters.category,
  color: state.ui.filters.color
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchProducts: (filters) => dispatch(fetchProducts(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

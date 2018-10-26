import React from 'react';

import FilterForm from './filter_form';
import ProductIndex from './product_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let filters = {animal: this.props.animal,
                    category: this.props.category,
                    color: this.props.color
                  };
    this.props.fetchProducts(filters);
  }

  render() {
    let { products, animal, category, color, updateFilter } = this.props;

    return (
      <div className="user-pane">
        <div className="right-half">
          <FilterForm
            animal={animal}
            category={category}
            color={color}
            updateFilter={updateFilter}
          />
        <ProductIndex products={products} />
        </div>
      </div>
    );
  }
}


export default Search;

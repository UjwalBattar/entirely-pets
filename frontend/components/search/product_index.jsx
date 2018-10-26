import React from 'react';
import ProductIndexItem from './product_index_item';

const ProductIndex = ({ products }) => (
  
  <div>
    <h1>Products: </h1>
    {products.map(product => (
      <ProductIndexItem
        product={product}
        key={product.id}
      />
    ))}
  </div>
);

export default ProductIndex;

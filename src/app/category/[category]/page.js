'use client';
import products from '../../PRODUCTS';

import React from 'react';

const page = ({ params }) => {
  const categoryId = parseInt(params.category, 10);
  const filteredProducts = products.filter(
    (product) => product.category_id === categoryId
  );
  return (
    <div>
      <h1>Category: {filteredProducts[0].category}</h1>
      {/* Render filtered products */}
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              <h2>
                {product.brand} {product.model}
              </h2>
              <p>Price: ${product.price}</p>
              <p>Screen Size: {product.screen_size}</p>
              <p>Battery: {product.battery}</p>
              <p>Storage: {product.storage}</p>
              <p>RAM: {product.ram}</p>
              {product.camera && <p>Camera: {product.camera}</p>}
              {product.processor && <p>Processor: {product.processor}</p>}
              {product.graphics && <p>Graphics: {product.graphics}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default page;

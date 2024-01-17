// // Image.js

import React from 'react';
import product from './product';

const Image = () => {
  return (
    <div>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />;
    </div>
  );
}

export default Image;


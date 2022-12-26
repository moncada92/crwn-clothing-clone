

import React from 'react';
import { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { ProductContext } from '../../context/products.context';

import './shop.styles.scss';

const Shop = () => {

  const { products } = useContext(ProductContext);
  console.log('products', products);

  return (
    <div className='products-container'>

      {products &&
        products.map((shop) => (
          <ProductCard key={shop.id} product={shop} />
        ))
      }
      
    </div>
  );
};

export default Shop;
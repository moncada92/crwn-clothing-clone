import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/category/category.selector';
import './category.styles.scss'
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {

  const { category } = useParams()

  const categoriesMap = useSelector( selectCategoriesMap);
  const loading = useSelector(selectCategoriesIsLoading)

  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  return (

    <Fragment>

      <h2 className="category-title">{category.toUpperCase()}</h2>

      {loading ? (
        <Spinner />
      ) : (
        <div className='category-container'>        
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))

        }
        </div>
      )}

    </Fragment>

  );
};

export default Category;
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/category/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {

const categoriesMap = useSelector( selectCategoriesMap);
const loading = useSelector(selectCategoriesIsLoading)

  return (
    <Fragment>
      {
        loading ? (
          <Spinner />
        ) : (

        categoriesMap &&
          Object.keys(categoriesMap).map((title) => {

            const products = categoriesMap[title];
              
              return(
              <CategoryPreview key={title} title={title} products={products} />
              )
        })
      
      )}

    </Fragment>

  );
};

export default CategoriesPreview;
import { createSelector } from "reselect";


const selectorCategoryReducer = (state) => {
  console.log('selector fired 1')  
  return state.categories;
}

export const selectorCategories = createSelector(
  [selectorCategoryReducer],
  (categoriesSlice) => {
    console.log('selector fired 2')
    return categoriesSlice.categories  
  }
)

export const selectCategoriesMap = createSelector(
  [selectorCategories],
  (categories) => {
    console.log('selector fired 3')
    return categories.reduce((acc, snapshot) => {
      const {title, items} = snapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});  
  }
);

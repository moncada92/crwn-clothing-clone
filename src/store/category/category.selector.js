import { createSelector } from "reselect";


const selectorCategoryReducer = (state) => {
  return state.categories;
}

export const selectorCategories = createSelector(
  [selectorCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories  
  }
)

export const selectCategoriesMap = createSelector(
  [selectorCategories],
  (categories) => {
    return categories.reduce((acc, snapshot) => {
      const {title, items} = snapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});  
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectorCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoadding
)
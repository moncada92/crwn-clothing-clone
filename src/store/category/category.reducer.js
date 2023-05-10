import { CATEGORY_ACTION_TYPES } from "./category.types"

const INITIAL_VALUE = { 
  categories : [],
  isLoadding: false,
  error: null,
}

export const categoriesReducer = (state = INITIAL_VALUE, action = {}) => {
  const { type, payload} = action

  switch(type) {
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {...state, isLoadding: true}

    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoadding: false}

    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {...state, error: payload, isLoadding: false}

    default:
      return state
  }
}
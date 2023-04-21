import { CATEGORY_ACTION_TYPES } from "./category.types"

const INITIAL_VALUE = { 
  categories : []
}

export const categoriesReducer = (state = INITIAL_VALUE, action = {}) => {
  const { type, payload} = action

  switch(type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload}

    default:
      return state
  }
}
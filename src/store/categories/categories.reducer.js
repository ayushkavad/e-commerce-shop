import { CATEGORIES_ACTION_TYPE } from './categories.type';

const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoding: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
      return { ...state, isLoding: true };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCESS:
      return { ...state, categories: payload, isLoding: false };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoding: false };
    default:
      return state;
  }
};

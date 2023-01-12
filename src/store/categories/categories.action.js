import { CATEGORIES_ACTION_TYPE } from './categories.type';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);

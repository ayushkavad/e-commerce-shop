import { CATEGORIES_ACTION_TYPE } from './categories.type';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCatagoriesAndDocument } from '../../utils/firebase/firebase.utils';

export const fetchcategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchcategoriesSucess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCESS, categoriesArray);

export const fetchcategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

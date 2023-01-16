import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCatagoriesAndDocument } from '../../utils/firebase/firebase.utils';

import {
  fetchcategoriesSucess,
  fetchcategoriesFailed,
} from './categories.action';

import { CATEGORIES_ACTION_TYPE } from './categories.type';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCatagoriesAndDocument, 'categories');
    yield put(fetchcategoriesSucess(categoriesArray));
  } catch (error) {
    yield put(fetchcategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}

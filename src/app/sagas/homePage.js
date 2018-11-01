/**
 * Gets the repositories of the user from Github
 */

import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import {
  GET_NEARBY_RESTAURANTS,
  GET_RESTAURANTS_BY_SEARCH,
  GET_RESTAURANT_DETAIL,
} from 'app/constants/homePage';
import {
  getNearbySuccess,
  getNearbyFailure,
  getRestaurantsBySearchSuccess,
  getRestaurantsBySearchFailure,
  getRestaurantDetailSuccess,
  getRestaurantDetailFailure,
} from 'app/actions/homePage';

import { makeSelectPayload } from 'app/selectors/homePage';
import {
  getNearbyRestaurantsAPI,
  getRestaurantsBySearchAPI,
  getRestaurantDetailAPI,
} from 'app/services/HomePage';
import { serverError } from 'app/appConstants/responseConstants';

/**
 * Github repos request/response handler
 */
export function* getNearbyRestaurantsWorker() {
  // Select username from store
  const payload = yield select(makeSelectPayload());
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(getNearbyRestaurantsAPI, payload);
    if (response.nearby_restaurants) {
      yield put(getNearbySuccess(response.nearby_restaurants));
    } else {
      yield put(getNearbyFailure(serverError));
    }
  } catch (err) {
    yield put(getNearbyFailure(serverError));
  }
}

export function* getRestaurantsBySearchWorker() {
  // Select username from store
  const payload = yield select(makeSelectPayload());
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(getRestaurantsBySearchAPI, payload);
    if (response.results_found && response.results_found > 0) {
      yield put(getRestaurantsBySearchSuccess(response.restaurants, response.results_found));
    } else {
      yield put(getRestaurantsBySearchFailure(serverError));
    }
  } catch (err) {
    yield put(getRestaurantsBySearchFailure(serverError));
  }
}

export function* getRestaurantDetailWorker() {
  // Select username from store
  const payload = yield select(makeSelectPayload());
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(getRestaurantDetailAPI, payload);
    if (response) {
      yield put(getRestaurantDetailSuccess(response));
    } else {
      yield put(getRestaurantDetailFailure(serverError));
    }
  } catch (err) {
    yield put(getRestaurantsBySearchFailure(serverError));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* getNearbyRestaurantsSaga() {
  yield takeLatest(GET_NEARBY_RESTAURANTS, getNearbyRestaurantsWorker);
}

export function* getRestaurantsBySearchSaga() {
  yield takeLatest(GET_RESTAURANTS_BY_SEARCH, getRestaurantsBySearchWorker);
}

export function* getRestaurantDetailSaga() {
  yield takeLatest(GET_RESTAURANT_DETAIL, getRestaurantDetailWorker);
}

// Bootstrap sagas
export const homePageSaga = [
  getNearbyRestaurantsSaga,
  getRestaurantsBySearchSaga,
  getRestaurantDetailSaga,
];

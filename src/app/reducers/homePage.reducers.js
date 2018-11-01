/*
 * HomePageReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  GET_NEARBY_RESTAURANTS,
  GET_NEARBY_RESTAURANTS_SUCCESS,
  GET_NEARBY_RESTAURANTS_FAILURE,
  GET_RESTAURANTS_BY_SEARCH,
  GET_RESTAURANTS_BY_SEARCH_SUCCESS,
  GET_RESTAURANTS_BY_SEARCH_FAILURE,
  CLEAR_RESTAURANTS_BY_SEARCH,
  GET_RESTAURANT_DETAIL,
  GET_RESTAURANT_DETAIL_SUCCESS,
  GET_RESTAURANT_DETAIL_FAILURE,
} from 'app/constants/homePage';

// The initial state of the App
const initialState = fromJS({
  payload: null,
  loading: false,
  error: false,
  nearbyRestaurants: [],
  restaurants: [],
  searchTotal: 0,
  searching: false,
  restaurant: null,
  fetchingDetail: false,
});

export const homePageReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEARBY_RESTAURANTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('payload', action.payload);
    case GET_NEARBY_RESTAURANTS_SUCCESS:
      return state
        .set('nearbyRestaurants', action.nearbyRestaurants)
        .set('loading', false);
    case GET_NEARBY_RESTAURANTS_FAILURE:
      return state
        .set('error', action.error)
        .set('loading', false);
    case GET_RESTAURANTS_BY_SEARCH:
      return state
        .set('searching', true)
        .set('error', false)
        .set('payload', action.payload);
    case GET_RESTAURANTS_BY_SEARCH_SUCCESS: {
      return state
        .set('restaurants', action.restaurants)
        .set('searchTotal', action.total)
        .set('searching', false);
    }
    case GET_RESTAURANTS_BY_SEARCH_FAILURE:
      return state
        .set('error', action.error)
        .set('searching', false);
    case CLEAR_RESTAURANTS_BY_SEARCH:
      return state
        .set('restaurants', [])
        .set('searchTotal', 0)
    case GET_RESTAURANT_DETAIL:
      return state
        .set('fetchingDetail', true)
        .set('error', false)
        .set('payload', action.payload);
    case GET_RESTAURANT_DETAIL_SUCCESS: {
      return state
        .set('restaurant', action.restaurant)
        .set('fetchingDetail', false);
    }
    default:
      return state;
  }
};

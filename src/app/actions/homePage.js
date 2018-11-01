/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

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

/**
 * Load the nearby restaurants, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_NEARBY
 */
export const getNearby = (payload) => {
  return {
    type: GET_NEARBY_RESTAURANTS,
    payload,
  };
};

/**
 * Dispatched when the nearby restaurants are loaded by the request saga
 *
 * @param  {array} nearbyRestaurants The nearby restaurants data
 *
 * @return {object}                  An action object with a type of GET_NEARBY_RESTAURANTS_SUCCESS passing the nearbyRestaurants
 */
export const getNearbySuccess = (nearbyRestaurants) => ({
  type: GET_NEARBY_RESTAURANTS_SUCCESS,
  nearbyRestaurants,
});

/**
 * Dispatched when loading the nearby restaurants fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_NEARBY_RESTAURANTS_FAILURE passing the error
 */
export const getNearbyFailure = (error) => ({
  type: GET_NEARBY_RESTAURANTS_FAILURE,
  error,
});

/**
 * Load the restaurants by search words, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_RESTAURANTS_BY_SEARCH
 */
export const getRestaurantsBySearch = (payload) => {
  return {
    type: GET_RESTAURANTS_BY_SEARCH,
    payload,
  };
};

/**
 * Dispatched when the restaurants by search are loaded by the request saga
 *
 * @param  {array} restaurants The restaurants data
 * @param  {number} total The restaurants data total
 *
 * @return {object}                  An action object with a type of GET_RESTAURANTS_BY_SEARCH_SUCCESS passing the restaurants
 */
export const getRestaurantsBySearchSuccess = (restaurants, total) => ({
  type: GET_RESTAURANTS_BY_SEARCH_SUCCESS,
  restaurants,
  total,
});

/**
 * Dispatched when loading the restaurants fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_NEARBY_RESTAURANTS_FAILURE passing the error
 */
export const getRestaurantsBySearchFailure = (error) => ({
  type: GET_RESTAURANTS_BY_SEARCH_FAILURE,
  error,
});

/**
 * Clear restaurants by search words
 *
 * @return {object} An action object with a type of CLEAR_RESTAURANTS_BY_SEARCH
 */
export const clearRestaurantsBySearch = () => {
  return {
    type: CLEAR_RESTAURANTS_BY_SEARCH,
  };
};

/**
 * Load the restaurant detail, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_RESTAURANT_DETAIL
 */
export const getRestaurantDetail = (payload) => {
  return {
    type: GET_RESTAURANT_DETAIL,
    payload,
  };
};

/**
 * Dispatched when the restaurants by search are loaded by the request saga
 *
 * @param  {object} restaurant The restaurants data
 *
 * @return {object}                  An action object with a type of GET_RESTAURANT_DETAIL_SUCCESS passing the restaurant
 */
export const getRestaurantDetailSuccess = (restaurant) => ({
  type: GET_RESTAURANT_DETAIL_SUCCESS,
  restaurant,
});

/**
 * Dispatched when loading the restaurants fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_NEARBY_RESTAURANTS_FAILURE passing the error
 */
export const getRestaurantDetailFailure = (error) => ({
  type: GET_RESTAURANT_DETAIL_FAILURE,
  error,
});
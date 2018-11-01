/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_NEARBY_RESTAURANTS = 'RestaurantsFindMap/HomePage/GET_NEARBY_RESTAURANTS';
export const GET_NEARBY_RESTAURANTS_SUCCESS = 'RestaurantsFindMap/HomePage/GET_NEARBY_RESTAURANTS_SUCCESS';
export const GET_NEARBY_RESTAURANTS_FAILURE = 'RestaurantsFindMap/HomePage/GET_NEARBY_RESTAURANTS_FAILURE';
export const GET_RESTAURANTS_BY_SEARCH = 'RestaurantsFindMap/HomePage/GET_RESTAURANTS_BY_SEARCH';
export const GET_RESTAURANTS_BY_SEARCH_SUCCESS = 'RestaurantsFindMap/HomePage/GET_RESTAURANTS_BY_SEARCH_SUCCESS';
export const GET_RESTAURANTS_BY_SEARCH_FAILURE = 'RestaurantsFindMap/HomePage/GET_RESTAURANTS_BY_SEARCH_FAILURE';
export const CLEAR_RESTAURANTS_BY_SEARCH = 'RestaurantsFindMap/HomePage/CLEAR_RESTAURANTS_BY_SEARCH';
export const GET_RESTAURANT_DETAIL = 'RestaurantsFindMap/HomePage/GET_RESTAURANT_DETAIL';
export const GET_RESTAURANT_DETAIL_SUCCESS = 'RestaurantsFindMap/HomePage/GET_RESTAURANT_DETAIL_SUCCESS';
export const GET_RESTAURANT_DETAIL_FAILURE = 'RestaurantsFindMap/HomePage/GET_RESTAURANT_DETAIL_FAILURE';

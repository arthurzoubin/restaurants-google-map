/**
 * Homepage selectors
 */
import { createSelector } from 'reselect';

const selectHomePage = state => state.get('homePage');

const makeSelectPayload = () => createSelector(
  selectHomePage,
  homePageState => homePageState.get('payload'),
);

const makeSelectLoading = () => createSelector(
  selectHomePage,
  homePageState => homePageState.get('loading'),
);

const makeSelectError = () => createSelector(
  selectHomePage,
  homePageState => homePageState.get('error'),
);

const makeSelectNearbyRestaurants = () => createSelector(
  selectHomePage,
  homePageState => homePageState.get('nearbyRestaurants'),
);

const makeSelectRestaurants = () => createSelector(
  selectHomePage,
  homePageState => homePageState.get('restaurants'),
);

const makeSelectSearchTotal = () => createSelector(
  selectHomePage,
  homePageState => homePageState.get('searchTotal'),
);

const makeSelectSearching= () => createSelector(
  selectHomePage,
  homePageState => homePageState.get('searching'),
);

const makeSelectRestaurant = () => createSelector(
  selectHomePage,
  homePageState => homePageState.get('restaurant'),
);

const makeSelectFetchingDetail = () => createSelector(
  selectHomePage,
  homePageState => homePageState.get('fetchingDetail'),
);

export {
  selectHomePage,
  makeSelectPayload,
  makeSelectLoading,
  makeSelectError,
  makeSelectNearbyRestaurants,
  makeSelectRestaurants,
  makeSelectSearchTotal,
  makeSelectSearching,
  makeSelectRestaurant,
  makeSelectFetchingDetail,
};

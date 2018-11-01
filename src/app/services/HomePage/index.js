import { RequestClient } from 'app/utils';
import {
  API_URL,
  API_KEY,
} from '../../utils';
import ApiConstants from '../../appConstants/apiConstants';
import { getDefaultHeaders } from '../../utils/requestHeaders';

const requestClient = () => new RequestClient(API_URL);

const getNearbyRestaurantsAPI = async (payload) => {
  const uri = ApiConstants.nearby.get;
  const response = await requestClient()
    .setHeaders(getDefaultHeaders())
    .setQueryParameter(payload)
    .setUri(uri)
    .doGet();
  return response;
};

const getRestaurantsBySearchAPI = async (payload) => {
  const uri = ApiConstants.search.get;
  const response = await requestClient()
    .setHeaders(getDefaultHeaders())
    .setQueryParameter(payload)
    .setUri(uri)
    .doGet();
  return response;
};

const getRestaurantDetailAPI = async (payload) => {
  const uri = ApiConstants.detail.get;
  const response = await requestClient()
    .setHeaders(getDefaultHeaders())
    .setQueryParameter(payload)
    .setUri(uri)
    .doGet();
  return response;
};

export {
  getNearbyRestaurantsAPI,
  getRestaurantsBySearchAPI,
  getRestaurantDetailAPI,
};

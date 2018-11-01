import is_promise from 'is-promise';
import { contains } from 'ramda';

export const SOCKET_FLAG = process.env.SOCKET_FLAG;
export const isPromise = is_promise;
export const hasWindow = typeof window !== 'undefined';
export const isBrowser = process.env.APP_ENV === 'browser';
export const API_URL = process.env.API_URL;
export const API_KEY = process.env.API_KEY;
export const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY;

/* istanbul ignore next */
export const isNodeInTree = (parent, child) => {
  if (parent === child) return true;
  let node = child.parentNode;
  while (node != null) {
    if (node === parent) return true;
    node = node.parentNode;
  }
  return false;
};

export const isEnv = (...environmentStrings) => (
  contains(process.env.NODE_ENV)(environmentStrings)
);

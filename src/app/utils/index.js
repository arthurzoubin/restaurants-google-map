import typeToReducer from 'type-to-reducer';
import Bem from 'react-bem-helper';
import get from './get';
import arrayConcat from './arrayConcat';
import {
  isNodeInTree,
  isPromise,
  hasWindow,
  isBrowser,
  isEnv,
  SOCKET_FLAG,
  API_KEY,
  API_URL,
  GOOGLE_MAP_API_KEY,
} from './predicates';
import { compact } from './helpers';
import { RequestClientClass as RequestClient } from './request';

export {
  get,
  typeToReducer,
  arrayConcat,
  isNodeInTree,
  isPromise,
  hasWindow,
  isBrowser,
  isEnv,
  SOCKET_FLAG,
  compact,
  RequestClient,
  Bem,
  API_KEY,
  API_URL,
  GOOGLE_MAP_API_KEY,
};

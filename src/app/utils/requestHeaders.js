import {
  API_KEY,
} from './predicates';

export const getDefaultHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'user-key': `${API_KEY}`,
  }
}
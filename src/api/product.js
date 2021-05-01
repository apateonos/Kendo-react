import { get, put } from './service';

export const getProductList = () => {
  return get('/public/data/data.json');
};
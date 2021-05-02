import { get, put } from './service';

export const getProductList = () => {
  return get('/data/products.json');
};
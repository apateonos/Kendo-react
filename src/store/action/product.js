import { GET_PRODUCT_LIST } from './type';

export const getProductListApi = {
  request: () => ({
    type: GET_PRODUCT_LIST['REQUEST']
  }),
  success: (response) => ({
    type: GET_PRODUCT_LIST['SUCCESS'],
    payload: response,
  }),
  failure: (err) => ({
    type: GET_PRODUCT_LIST['FAILURE'],
    payload: error,
  }), 
};
import { GET_PRODUCT_LIST } from '../action/type';

const initialState = {
  products: []
}

export default function (state=initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCT_LIST['REQUEST']:
      return { ...state };

    case GET_PRODUCT_LIST['SUCCESS']:
      return {
        ...state,
        products: payload
      }
    
    case GET_PRODUCT_LIST['FAILURE']:
      return { 
        ...state,
        err: payload.error
      }
    default:
      return { ...state };
  }
}
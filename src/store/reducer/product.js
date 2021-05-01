import { GET_PRODUCT_LIST } from '../action/type';

const initialState = {
  toggle: false,
  data: []
}

export default function (state=initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCT_LIST['REQUEST']:
      return { ...state };

    case GET_PRODUCT_LIST['SUCCESS']:
      return {
        ...state,
        data: payload.data
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
const initialState = {
  data: []
}

export default function (state=initialState, { type, payload }) {
  switch (type) {    
    default:
      return { ...state };
  }
}
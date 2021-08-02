import { products } from '../../utils/data';

const initialState = {
  products,
  cart: []
}

const productReducer = (state = initialState, action) => {
  const { type , payload } = action;

  switch(type){
    default:
      return state;
  }
}

export default productReducer;
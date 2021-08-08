import { products } from '../../utils/data';

const initialState = {
  products,
  carts: []
}

const productReducer = (state = initialState, action) => {
  const { type , payload } = action;

  switch(type){
    default:
      return state;
    case "ADD_TO_CART":
      const isCartItem = state.carts.find(item => item.id === payload);
      const newCartItem = state.products.find(item => item.id === payload);
      if(!isCartItem) {
        return {
          ...state,
          carts: [...state.carts, newCartItem]
        }
      }
      else {
        return state;
      }
    case "INC_CART":
      const originalPrice = state.products.find(item => item.id === payload).price;
      const incCart = state.carts.map(item => {
        if(item.id === payload) {
          return {
            ...item,
            price: item.price + originalPrice
          }
        }
        else {
          return item
        }
      });

      return {
        ...state,
        carts: incCart
      };

    case "DEC_CART":
      const oriPrice = state.products.find(item => item.id === payload).price;
      const decCart = state.carts.map(item => {
        if(item.id === payload) {
          return {
            ...item,
            price: item.price - oriPrice
          }
        }
        else {
          return item
        }
      });

      return {
        ...state,
        carts: decCart
      };

    case "REMOVE_CART":
      return {
        ...state,
        carts: state.carts.filter(item => item.id !== payload)
      }
  }
}

export default productReducer;
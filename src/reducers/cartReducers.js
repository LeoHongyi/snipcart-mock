import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,

  CART_CLEAR_ITEMS,
} from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      let item = action.payload
      const existItem = state.cartItems.find(x => x.product === item.product)

      if (item.update === 'y') {
        return {
          ...state
        }
      }
      if (existItem) {
        return {
            ...state,
          cartItems: state.cartItems.map(x => {
            if (x.product === existItem.product) {
                  item.qty += Number.parseInt(existItem.qty);
                  return item;
              } else {
                return x;
              }
            })
        }

      } else {
          return {
              ...state,
              cartItems: [...state.cartItems, item]
          }
      }
    case CART_REMOVE_ITEM:
        return {
            ...state,
            cartItems: state.cartItems.filter(x => x.product !== action.payload)
        }
    default:
      return state
  }
}

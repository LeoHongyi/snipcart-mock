import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from '../constants/cartConstants'

export const addToCart = (product) => (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        qty: product.qty,
        update: product.update,
        description: product.description
    }
  })

}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
  })

}

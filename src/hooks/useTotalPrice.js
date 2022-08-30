import React, { useMemo } from 'react';
import { useSelector } from 'react-redux'

function useTotalPrice() {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const totalPrice = React.useMemo(()=>{
    return cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
  }, [cart])
  const totalQty = React.useMemo(()=>{
    return cartItems.reduce((acc, item) => acc + item.qty, 0)
  }, [cart])
  return [totalPrice, totalQty]
}

export default useTotalPrice;

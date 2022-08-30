import React from 'react'
import CustomDrawer from '../components/CustomDrawer'
import { useNavigate } from 'react-router-dom';

const CartScreen = () => {
  const navigate = useNavigate()
  const backToHome = () => {
    navigate('/')
  }
  return (
    <div>
      <CustomDrawer isOpen={true} onClose={backToHome}  isCartPage={true} />
    </div>
  )
}

export default CartScreen

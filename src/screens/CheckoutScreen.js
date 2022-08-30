import React from 'react'
import CustomDrawer from '../components/CustomDrawer'
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const CheckoutScreen = () => {
  const navigate = useNavigate()
  const backToHome = () => {
    navigate('/')
  }
  return (
    <div>
      <CustomDrawer isOpen={true} onClose={backToHome}  isCheckoutPage={true} />
    </div>
  )
}

export default CheckoutScreen

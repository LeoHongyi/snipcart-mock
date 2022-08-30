import React from 'react'
import {Button, Center,Box } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {useNavigate } from 'react-router-dom';
const CheckoutButton = () => {
  const navigate = useNavigate()
  const handleCheckout = () => {
    navigate(`/checkout`)
  }
  const handleToDetailedCart = () => {
    navigate(`/cart`)
  }
  return (
    <Center h='100px' color='white' flexDirection='column'>
      <Button colorScheme='blue' h="40%" onClick={handleCheckout} w="100%" rightIcon={<ArrowForwardIcon />}>
        Checkout
      </Button>
      <Box
        as='button'
        _hover={{ bg: '#ebedf0' }}
        color='darkblue'
         _active={{
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
         }}
        onClick={handleToDetailedCart}
         style={{ textDecoration: 'underline' }}
        >
          View detailed cart
      </Box>
    </Center>
  )
}

export default CheckoutButton

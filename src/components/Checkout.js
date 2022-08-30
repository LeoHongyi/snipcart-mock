import React from 'react'
import { Stack, Box } from '@chakra-ui/react'
import OrderSummary from './OrderSummary'
import Billing from './Billing'

const Checkout = () => {
  return (
    <Stack spacing={8} direction='row'>
      <Box p={5} shadow='md' borderWidth='1px' h='100%' width="50%" >
        <Billing />
      </Box>
      <Box p={5} shadow='md' borderWidth='1px' h='300px' width="50%" >
        <OrderSummary />
      </Box>
    </Stack>
  )
}

export default Checkout

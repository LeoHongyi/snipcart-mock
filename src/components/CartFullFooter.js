import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react';
import Promocode from './Promocode'
import CartFooter from './CartFooter'
const CartFullFooter = ({isCartPage}) => {
  return (
  <Grid templateColumns='repeat(5, 1fr)' gap={4}>
      <GridItem colSpan={2} h='10'>
          <Promocode isCartPage={isCartPage}/>
      </GridItem>
      <GridItem colStart={4} colEnd={6} h='10'>
          <CartFooter />
      </GridItem>
  </Grid>
  )
}

export default CartFullFooter

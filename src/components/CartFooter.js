import React from 'react'
import {  Grid,
  GridItem,
  Text
} from '@chakra-ui/react'
import useTotalPrice from '../hooks/useTotalPrice'

const CartFooter = () => {
  const [totalPrice] = useTotalPrice();
  return (
    <Grid >
      <GridItem colSpan={4} h='10'>
        <Text fontSize='md' color='#ddd'>shipping and taxes will be calculated at checkout.</Text>
        <Text as='b'>Total</Text>
      </GridItem>
      <GridItem colStart={3} colEnd={5} h='10' >
        <Text as='b'>${totalPrice}</Text>
      </GridItem>
    </Grid>
  )
}

export default CartFooter

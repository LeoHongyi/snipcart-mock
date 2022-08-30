import React from 'react'
import { ShopBagIcon } from './ShopBagIcon';
import { ProfileIcon } from './ProfileIcon';
import { Flex, Text } from '@chakra-ui/react'
import useTotalPrice from '../hooks/useTotalPrice';

const CartHeaderLeft = () => {
  const [,totalQty] = useTotalPrice();
  return (
    <Flex>
      <ProfileIcon color='#0aa7f5'/>
      <Text fontSize='xs'>Sign in</Text>
      <ShopBagIcon color='#0aa7f5' />
      <Text fontSize='xs'>{totalQty }</Text>
    </Flex>
  )
}

export default CartHeaderLeft

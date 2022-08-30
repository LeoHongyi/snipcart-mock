import React from 'react'
import {  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Button,
  Center,
  Divider,
  Grid,
  GridItem,
  Flex
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import Checkout from './Checkout';
import Promocode from './Promocode';
import CheckoutButton from './CheckoutButton';
import { ArrowBackIcon } from '@chakra-ui/icons';
import CartFooter from './CartFooter';
import CartHeaderLeft from './CartHeaderLeft';
import CartFullFooter from './CartFullFooter';
const CustomDrawer = ({ isOpen, onClose, isCheckoutPage = false, isCartPage = false }) => {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      size={ (isCheckoutPage || isCartPage) ? 'full' : 'md'}
    >
    <DrawerOverlay />
    <DrawerContent>
        { !isCartPage && <DrawerCloseButton /> }
        <DrawerHeader style={{ backgroundColor: '#ddd' }}>
          <Flex justifyContent='space-between'>
            {(isCheckoutPage || isCartPage) ?
              <Button onClick={onClose} leftIcon={<ArrowBackIcon />} bgColor="#ddd" color="grey">
                  Continue shopping
              </Button>
              : 'Cart summary'}
            {
              isCartPage && <Text fontSize='md' as='b'>Cart summary </Text>
            }
            {
              isCartPage && <CartHeaderLeft />
            }
          </Flex>

        </DrawerHeader>


      <DrawerBody>
      {
            isCheckoutPage ? <> <Checkout /> </> : isCartPage ?
            cartItems.map((item) => <CartItem key={item.product} isCartPage={isCartPage} product={item} />)
           : <>
        {
          (!cartItems || cartItems.length === 0) ?
            <Center h='100%' style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
              <Text fontSize='3xl' color='#ddd'>Your cart is Empty</Text>
              <Button variant='outline' colorScheme='telegram' onClick={onClose} > Back to store </Button>
            </Center> :
            cartItems.map((item) => <CartItem key={item.product} product={item} />)
        }
        <Divider />
        <Promocode />
        <Divider />
        <CartFooter />
        <Divider />
        <CheckoutButton />
        </>
      }
          {isCartPage && <CartFullFooter isCartPage={isCartPage} />}

      </DrawerBody>

    </DrawerContent>
  </Drawer>
  )
}

export default CustomDrawer

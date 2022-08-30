import React from 'react'
import { Flex,Box,Spacer, Grid, GridItem, Image, Text, IconButton } from '@chakra-ui/react'
import { DeleteIcon, MinusIcon,AddIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import {addToCart, removeFromCart} from '../actions/cartActions'

const CartItem = ({ product, isCartPage }) => {
  const dispatch = useDispatch()
  const handleDesQty = () => {
    let pendingProduct = product;

    if (pendingProduct.qty > 0) {
      pendingProduct.qty -= 1;
      pendingProduct.update = 'y';
      dispatch(addToCart(pendingProduct))
    }

  }
  const handleIncQty = () => {
    let pendingProduct = product;

    if (pendingProduct.qty > 0) {
      pendingProduct.qty += 1;
      pendingProduct.update = 'y';
      dispatch(addToCart(pendingProduct))
    }
  }

  const deleteCart = () => {
    const id = product.product
    dispatch(removeFromCart(id))
  }
  if (isCartPage) {
    return (
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
        marginBottom="20px"
        shadow='md'
      >
        <GridItem rowSpan={2} colSpan={1} >
          <Image
              boxSize='80%'
              objectFit='cover'
              src={product.image}
              alt={product.name}
            />
        </GridItem>
        <GridItem colSpan={2}>
          <Text as='b' fontSize='xl'>{product.name}</Text>
          <Text fontSize='md' marginTop='10px'>{product.description}</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Flex justifyContent='flex-end'>
            <IconButton
                colorScheme='red'
                isRound
                aria-label='Call Sage'
                fontSize='15px'
                icon={<DeleteIcon />}
                onClick={deleteCart}
              />
          </Flex>

        </GridItem>
        <GridItem colSpan={4}>
          <GridItem colSpan={2}>

          </GridItem>
          <GridItem colSpan={2}>
            <Flex justifyContent='flex-end'>
              <Text fontSize='sm'>
                Quantity
              </Text>
            </Flex>
            <Flex justifyContent='flex-end'>
              <IconButton
                colorScheme='linkedin'
                aria-label='Call Segun'
                size='xs'
                isRound
                marginRight={2}
                icon={<MinusIcon />}
                onClick={handleDesQty}
              />
              <Text fontSize='xs'>{product.qty}</Text>
              <IconButton
                colorScheme='linkedin'
                aria-label='Call Segun'
                size='xs'
                isRound
                marginLeft={2}
                icon={<AddIcon />}
                onClick={handleIncQty}
              />
            </Flex>
            <Flex justifyContent='flex-end'>
              <Text fontSize='sm' as='b'>${(product.qty * product.price).toFixed(2)}</Text>
            </Flex>
        </GridItem>
        </GridItem>
      </Grid>
    )
  }
  return (
    <>
      {
        product.qty > 0 &&
        <div>
        <Flex style={{ marginBottom: '20px' }}>
        <Box w='100px' h='10'>
          <Image
            boxSize='50px'
            objectFit='cover'
            src={product.image}
            alt={product.name}
          />
        </Box>
        <Spacer />
        <Box w='170px' h='10'>
          <Text fontSize='md' as="b">{ product.name }</Text>
        </Box>
        <Spacer />
        <Box w='90px' h='10'>
            <IconButton
              colorScheme='red'
              isRound
              aria-label='Call Sage'
              fontSize='15px'
              icon={<DeleteIcon />}
              onClick={deleteCart}
            />

        </Box>

      </Flex>
      <Grid templateColumns='repeat(5, 1fr)' gap={6} style={{ marginBottom: '20px' }}>
          <GridItem colSpan={2} h='10'>
            <Text fontSize='sm'>
              Quantity
            </Text>
            <Flex >
            <IconButton
              colorScheme='linkedin'
              aria-label='Call Segun'
              size='xs'
              isRound
              marginRight={2}
              icon={<MinusIcon />}
              onClick={handleDesQty}
            />
            <Text fontSize='xs'>{product.qty}</Text>
            <IconButton
                colorScheme='linkedin'
                aria-label='Call Segun'
                size='xs'
                isRound
                marginLeft={2}
                icon={<AddIcon />}
                onClick={handleIncQty}
            />
            </Flex>
          </GridItem>
          <GridItem colStart={4} colEnd={6} h='10'>
            <Text fontSize="md">${(product.qty * product.price).toFixed(2)}</Text>
          </GridItem>
      </Grid>
        </div>
      }
    </>

  )
}

export default CartItem

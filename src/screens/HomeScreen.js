import React from 'react'
import { Container,useDisclosure,IconButton, Text, Flex, HStack, Center, Box } from '@chakra-ui/react'

import Product from '../components/Product';
import products from '../product'
import CustomDrawer from '../components/CustomDrawer';
import {ShoppingCart} from '../components/ShoppingCartIcon'
import useTotalPrice from '../hooks/useTotalPrice';

const HomeScreen = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [totalPrice] = useTotalPrice();

  const handleClick = () => {
    onOpen();
  }
  return (
    <Flex flexDirection="column">
      <Container>
        <HStack justifyContent="end">
          <Center w='30px' h='40px' >
            <IconButton
                marginRight="30px"
                isRound
                aria-label='Call Sage'
                fontSize='15px'
                icon={<ShoppingCart />}
                onClick={handleClick}
              />
          </Center>
          <Center w='40px' h='40px'>
            <Box as='span' fontWeight='bold' fontSize='lg'>
              {
                totalPrice !== '0.00' &&
                <Text as="b">${totalPrice}</Text>
              }
            </Box>
          </Center>
        </HStack>
      </Container>
      <Container>
        {
          products.map((product) => <Product product={product} key={product._id} />)
        }
      </Container>
      <CustomDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default HomeScreen

import React from 'react'
import { Grid,Flex,Divider, GridItem, Text, Box, useDisclosure,List,
  ListItem,Container
} from '@chakra-ui/react'
import CustomDrawer from './CustomDrawer';
import { useSelector } from 'react-redux'
import CartFooter from './CartFooter';

const OrderSummary = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const handleEdit = () => {
  onOpen();
  }

  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
      <GridItem colSpan={2} h='10'>
        <Text as='b' fontSize='lg'>Order summary</Text>
      </GridItem>
      <GridItem colStart={4} colEnd={6} h='10'>
      <Box
        as='button'
        _hover={{ bg: '#ebedf0' }}
        color='darkblue'
        _active={{
          color: 'blue',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9',
        }}
        onClick={handleEdit}
        style={{ textDecoration: 'underline' }}
        >
          Edit
      </Box>
      </GridItem>
      <CustomDrawer isOpen={isOpen} onClose={onClose} />
      </Grid>
      <Container>
        <List>
          {
            cartItems.map((item) => (
                <ListItem>
                  <Flex justifyContent="space-between" w='400px'>
                    <Text fontSize='sm'>{item.name}</Text>
                  <Text fontSize='sm'>*{item.qty}</Text>
                  <Text fontSize='sm'>${ item.price }</Text>
                  </Flex>
                </ListItem>
             ))
          }

        </List>
      </Container>
      <Divider />
      <CartFooter />
    </>

  )
}

export default OrderSummary

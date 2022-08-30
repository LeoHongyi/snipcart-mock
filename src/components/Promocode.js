import React, {useState} from 'react'
import {Button, Box, Center, InputGroup, Input, InputRightElement} from '@chakra-ui/react'
const Promocode = ({isCartPage}) => {
  let [showInput, setShowInput] = useState(false)
  console.log(showInput);
  return (
    <>
      <Center h='100px' color='white'>
        {
          !showInput ?
            <Button variant="outline" onClick={() => setShowInput(true)} color={isCartPage ? 'black' : 'blue'} colorScheme='blue' h="40%" w="100%">
            Promo code?
          </Button> :
          <>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={'text'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' variant='outline' colorScheme='telegram'>
                  Apply
                </Button>
              </InputRightElement>
              </InputGroup>
              <Box
                as='button'
                _hover={{ bg: '#ebedf0' }}
                color='black'
                _active={{
                  color: 'blue',
                  transform: 'scale(0.98)',
                  borderColor: '#bec3c9',
                }}
                onClick={() => setShowInput(false)}
                style={{ textDecoration: 'underline' }}
              >
                cancel
              </Box>
          </>

        }
      </Center>

    </>
  )
}

export default Promocode

import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Button,
  Container,
  Box
} from '@chakra-ui/react'

const Billing = () => {
  return (
    <FormControl isRequired>
      <FormLabel>First name</FormLabel>
      <Input placeholder='First name' />
      <FormLabel>Email </FormLabel>
      <Input placeholder='email name' type='email' />
      <HStack spacing='30px' marginTop='10px'>
        <Box w='70%' h='40px' >
          <FormLabel>Street</FormLabel>
          <Input placeholder='Street' />
        </Box>
        <Box w='30%' h='40px'>
          <FormLabel>Apt</FormLabel>
          <Input placeholder='Apt' />
        </Box>
      </HStack>
      <FormLabel marginTop='40px'>City </FormLabel>
      <Input placeholder='City' />

        <FormLabel>Country</FormLabel>
        <Select placeholder='Select country'>
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
        <HStack spacing='30px' marginTop='10px'>
        <Box w='70%' h='40px' >
          <FormLabel>Province/State</FormLabel>
          <Input placeholder='Province/State' />
        </Box>
        <Box w='30%' h='40px'>
          <FormLabel>ZIP code</FormLabel>
          <Input placeholder='' />
        </Box>
      </HStack>
      <Container marginTop="40px">
      <Button
            mt={4}
            colorScheme='teal'
          type='submit'
          w="100%"
          >
            Submit
      </Button>
      </Container>

    </FormControl>
  )
}

export default Billing

import React, { useState } from 'react'
import styles from './style.module.scss';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import CustomDrawer from './CustomDrawer';
import { useDispatch, useSelector } from 'react-redux'
import {addToCart} from '../actions/cartActions'

const ProductBuyButton = ({ price, product }) => {
  const [qty, setQty] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (value) => setQty(Number.parseInt(value))
  const dispatch = useDispatch()
  const handleAddCart = () => {
    onOpen();
    let pendingProduct = product;
    if (qty !== 0) {
      pendingProduct.qty = qty;
      dispatch(addToCart(pendingProduct))
    }
  }
  return (
    <div className={styles.product__summary}>
      <NumberInput
        defaultValue={qty}
        min={0}
        onChange={handleChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <div className={styles.product__price}>${qty === 0 ? price : (qty * price).toFixed(2)}</div>
      <Button colorScheme='telegram' className={styles.product__button} size='lg' onClick={handleAddCart}>
        Add to cart
      </Button>
      <CustomDrawer isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default ProductBuyButton

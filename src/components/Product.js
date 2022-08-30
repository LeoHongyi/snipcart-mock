import React from 'react'
import styles from './style.module.scss';
import ProductBuyButton from './ProductBuyButton'

const Product = ({product}) => {
  return (
    <div className={styles.product}>
    <img className={styles.product__image} src={product.image} alt="" />
      <div className={styles.product__content}>
        <h2 className={styles.product__title}>{product.name}</h2>
        <p className={styles.product__description}>{product.description}</p>
        <ProductBuyButton price={product.price} product={product} />
      </div>
    </div>
  )
}

export default Product

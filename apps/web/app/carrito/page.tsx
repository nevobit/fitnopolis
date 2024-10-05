import Link from 'next/link'
import React from 'react'
import styles from "./Cart.module.css"

const Cart = () => {
  return (
    <div className={styles.container} >
      <h1>MI CARRITO</h1>
      <p>No tienes ningún artículo en tu carrito.</p>
      <p>Haga clic <Link href="/productos" >aquí</Link> para continuar comprando.</p>
      
    </div>
  )
}

export default Cart
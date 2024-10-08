'use client'
import Link from 'next/link'
import React from 'react'
import styles from "./Cart.module.css"
import Image from 'next/image';
import { DivisaFormater } from '@repo/tools';
import { Minus, Plus, TrainTrack, Trash, Trash2, Truck } from 'lucide-react';
import { useCartStore } from '../../store';

const Cart = () => {
  const productsInCart = useCartStore((state) => state.cart);
  const items = useCartStore((state) => state.getTotalItems());
  const totalValue = useCartStore(state => state.getTotalValueItems())

  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const removeProduct = useCartStore((state) => state.removeProduct);


  return (
    <div className={styles.body} >


    <div className={styles.container} >
      <h1>MI CARRITO</h1>

      {items <= 0 ? (
        <>
          <p>No tienes ningún artículo en tu carrito.</p>
          <p>Haga clic <Link href="/productos" >aquí</Link> para continuar comprando.</p>

        </>
      ) : (
        <div className={styles.cart_container} >
          <div className={styles.items} >
              <h2 className={styles.delivery}><span className={styles.title}><Truck /> Envío a domicilio</span>  <span>{items} Producto{items > 1 && "s"}</span></h2>
              {productsInCart.map((product) => (

                <div key={product.id} className={styles.cart_card} >
              <div className={styles.item_info} >
                    <Link href="/productos" className={styles.photo}>
                      <Image src={product.image} alt='' width={150} height={150} />
                </Link>
                    <h2 className={styles.name} >{product.name}</h2>
                    <h3 className={styles.price}>{DivisaFormater({ value: product.price })}</h3>
                <div className={styles.qty} >
                      <button onClick={() => addProductToCart({ ...product, quantity: -1 })} ><Minus width={18} height={18} /></button>
                      <p>{product.quantity}</p> <button onClick={() => addProductToCart({ ...product, quantity: 1 })} ><Plus width={18} height={18} /></button>
                </div>
                    <button className={styles.action} onClick={() => removeProduct(product.id)} ><Trash2 width={20} height={20} /> Eliminar</button>

                <div className={styles.shipping} >
                  <h4><Truck width={18} height={18} /> Disponible para Envio Domicilio</h4>
                  <p>Fecha de entrega de 2 a 4 dias habiles en ciudades principales y de 3 a 5 dias habiles en el resto del pais. <br />
                    Hacemos envias a todo el pais.
                  </p>
                </div>
                  </div>
            </div>
              ))}

            </div>
          <div className={styles.summary} >
            <strong className={styles.title} >Resumen de compra</strong>

            <div className={styles.col} >
              <p>Subtotal</p>
                <p>{DivisaFormater({ value: totalValue })}</p>
            </div>
            <div className={styles.col} >
              <p>Envio</p>
              <p>Gratis</p>
            </div>
            <div className={styles.col} >
              <h4>Total</h4>
                <h4>{DivisaFormater({ value: totalValue })}</h4>
            </div>
            <Link href="/checkout" className={styles.btn} > Proceder al Pago </Link>

          </div>
        </div>
      )}

      </div>
    </div>

  )
}

export default Cart
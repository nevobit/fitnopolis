import Link from 'next/link'
import React from 'react'
import styles from "./Cart.module.css"
import Image from 'next/image';
import { DivisaFormater } from '@repo/tools';
import { Minus, Plus, TrainTrack, Trash, Trash2, Truck } from 'lucide-react';

const ITEMS = 1;
const Cart = () => {
  return (
    <div className={styles.container} >
      <h1>MI CARRITO</h1>

      {ITEMS <= 0 ? (
        <>
          <p>No tienes ningún artículo en tu carrito.</p>
          <p>Haga clic <Link href="/productos" >aquí</Link> para continuar comprando.</p>

        </>
      ) : (
        <div className={styles.cart_container} >
          <div className={styles.items} >
            <h2 className={styles.delivery}><span className={styles.title}><Truck /> Envío a domicilio</span>  <span>{ITEMS} Producto{ITEMS > 1 && "s"}</span></h2>
            <div className={styles.cart_card} >
              <div className={styles.item_info} >
                <Link href="/" className={styles.photo}>
                  <Image src="/bikes.webp" alt='' width={150} height={150} />
                </Link>
                <h2 className={styles.name} >Gorra Dad Unixes</h2>
                <h3 className={styles.price}>{DivisaFormater({ value: 89950 })}</h3>
                <div className={styles.qty} >
                  <button><Minus width={18} height={18} /></button>
                  <p>1</p> <button><Plus width={18} height={18} /></button>
                </div>
                <button className={styles.action} ><Trash2 width={20} height={20} /> Eliminar</button>

                <div className={styles.shipping} >
                  <h4><Truck width={18} height={18} /> Disponible para Envio Domicilio</h4>
                  <p>Fecha de entrega de 2 a 4 dias habiles en ciudades principales y de 3 a 5 dias habiles en el resto del pais. <br />
                    Hacemos envias a todo el pais.
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className={styles.summary} >
            <strong className={styles.title} >Resumen de compra</strong>

            <div className={styles.col} >
              <p>Subtotal</p>
              <p>{DivisaFormater({ value: 134900 })}</p>
            </div>
            <div className={styles.col} >
              <p>Envio</p>
              <p>Gratis</p>
            </div>
            <div className={styles.col} >
              <h4>Total</h4>
              <h4>{DivisaFormater({ value: 134900 })}</h4>
            </div>
            <Link href="/checkout" className={styles.btn} > Proceder al Pago </Link>

          </div>
        </div>
      )}

    </div>
  )
}

export default Cart
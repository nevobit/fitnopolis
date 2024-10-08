'use client'
import { DivisaFormater } from '@repo/tools';
import React, { useState } from 'react'
import styles from './Checkout.module.css'
import { useCartStore } from '../../store';
import { Field, Input } from '@repo/design-system/web'

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [identification, setIdentification] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const totalValue = useCartStore(state => state.getTotalValueItems())

  const payOrder = async () => {
    const response = await fetch("/api/payment", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, identification, phone, address, city, email, title: "Compra Fitnopolis", total_price: totalValue })
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud de pago');
    }

    // Parseamos la respuesta a JSON
    const data = await response.json();

    if (data.paymentLink) {
      window.location.href = data.paymentLink;
      setLoading(false);

    } else {
      throw new Error('No se recibió la URL de redirección');
    }
  }


  return (
    <div className={styles.container} >

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
      </div>

      <div>
        <Field label='Nombre'>
          <Input placeholder="Introduce tu nombre" value={name} onChange={({ target }) => setName(target.value)} />
        </Field>
        <div className={styles.col} >
          <Field label='Cédula'>
            <Input placeholder="Introduce tu número de doumento" value={identification} onChange={({ target }) => setIdentification(target.value)} />
          </Field>
          <Field label='Teléfono'>
            <Input placeholder="Introduce tu número de teléfono" value={phone} onChange={({ target }) => setPhone(target.value)} />
          </Field>
        </div>

        <Field label='Dirección'>
          <Input placeholder="Introduce tu dirección" value={address} onChange={({ target }) => setAddress(target.value)} />
        </Field>
        <div className={styles.col} >

          <Field label='Ciudad'>
            <Input placeholder="Introduce tu ciudad" value={city} onChange={({ target }) => setCity(target.value)} />
          </Field>
          <Field label='Correo'>
            <Input placeholder="Introduce tu correo" value={email} onChange={({ target }) => setEmail(target.value)} />
          </Field>
        </div>
        <button className={styles.btn} onClick={payOrder} >Pagar</button>

        <p className={styles.text} >Al confirmar tu pago, Fitnopolis te enviara por correo electronio toda la información relacionada a tu compra y como podrás rastrear tu pedido.</p>
      </div>
    </div>
  )
}

export default Checkout
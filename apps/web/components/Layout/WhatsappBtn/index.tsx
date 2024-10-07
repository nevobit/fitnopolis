import React from 'react'
import styles from "./Whatsapp.module.css"
import Link from 'next/link'
import Image from 'next/image'

const WhatsappBtn = () => {
  return (
    <Link className={styles.whatsapp} href="https://api.whatsapp.com/send?phone=573137426636&text=Hola, me interesa un producto" title='Boton Whatsapp' ><Image src="/whatsapp.webp" width={50} height={50} alt='Boton Whatsapp' /> </Link>
  )
}

export default WhatsappBtn
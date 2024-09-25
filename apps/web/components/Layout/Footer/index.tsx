import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>

      <div>
        <div className={styles.images}>

        </div>
        <p className={styles.copy}>&copy; Fitnopolis SAS. 2024  Todos los Derechos Reservados</p>

      </div>
      
      </div>

      <Link className={styles.whatsapp}  href="https://api.whatsapp.com/send?phone=573207768383&text=Hola, me interesa un producto" title='Boton Whatsapp' ><Image src="/whatsapp.webp" width={50} height={50} alt='Boton Whatsapp' /> </Link>
    </footer>
  )
}

export default Footer
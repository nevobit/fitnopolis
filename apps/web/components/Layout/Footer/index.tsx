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

    </footer>
  )
}

export default Footer
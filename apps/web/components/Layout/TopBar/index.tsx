import React from 'react'
import styles from "./Header.module.css";

const TopBar = () => {
  return (
    <header className={styles.header} >
      <div className={styles.container} >
        <p>ENVÍOS GRATIS A TODAS LAS CIUDADES</p>
      </div>

    </header>
  )
}

export default TopBar
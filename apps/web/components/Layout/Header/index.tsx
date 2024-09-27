import React from 'react'
import styles from "./Header.module.css";
import { Menu, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header} >
      <Menu width={22} />
      <Image src="/isotype.png" alt='Logo Fitnopolis' width={26} height={26} />
      <ShoppingCart width={22} />
    </header>
  )
}

export default Header
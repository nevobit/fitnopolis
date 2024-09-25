import React from 'react'
import styles from "./Header.module.css";
import { Menu, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header} >
      <Menu width={22} />
      <Image src="/isotype.webp" alt='Logo Fitnopolis' width={25} height={25} />
      <ShoppingCart width={22} />
    </header>
  )
}

export default Header
import React from 'react'
import styles from "./Header.module.css";
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ShoppingCart from '../ShoppingCart';

const Header = () => {
  return (
    <header className={styles.header} >
      <div className={styles.container} >
        <Link href="/productos" title='Menu' className={styles.menu} >
          <Menu width={27} />
        </Link>
        <Link href="/" >
          <Image src="/isotype.png" alt='Logo Fitnopolis' width={26} height={26} />
        </Link>
        <nav className={styles.nav} >
          <Link href="/productos">PRODUCTOS</Link>
          <Link href="/categorias/termos">TERMOS</Link>
          <Link href="/categorias/gorras">GORRAS</Link>
          <Link href="/categorias/relojes">RELOJES</Link>
        </nav>
        <Link href="/carrito" title='Carrito' >
          <ShoppingCart />
        </Link>
      </div>
    </header>
  )
}

export default Header
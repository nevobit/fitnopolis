import React from 'react'
import styles from "./Header.module.css";
import { Menu, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header} >
      <div className={styles.container} >
        <button className={styles.menu} >
          <Menu width={27} />
        </button>
        <Image src="/isotype.png" alt='Logo Fitnopolis' width={26} height={26} />
        <nav className={styles.nav} >
          <Link href="/productos">PRODUCTOS</Link>
          <Link href="/categorias/termos">TERMOS</Link>
          <Link href="/categorias/gorras">GORRAS</Link>
          <Link href="/categorias/relojes">RELOJES</Link>
        </nav>
        <Link href="/carrito" >
          <ShoppingCart width={22} />
        </Link>
      </div>
    </header>
  )
}

export default Header
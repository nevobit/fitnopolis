'use client'
import React, { useEffect, useState } from 'react'
import { useCartStore } from '../../../store'
import Link from 'next/link';
import styles from "./ShoppingCart.module.css"
import { ShoppingCart as Icon } from 'lucide-react';

const ShoppingCart = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])
  return (
    <Link href="/carrito" className={styles.link} >
      {loaded && (
        <>
          {totalItems > 0 && (
            <span className={styles.beage}>{totalItems}</span>
          )}
        </>
      )}
      <Icon width={22} />
    </Link>
  )
}

export default ShoppingCart
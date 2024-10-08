"use client"
import React, { useCallback, useEffect, useState } from 'react'
import styles from "./Product.module.css"
import { CartProduct, useCartStore } from '../../../store'
import { Minus, Plus } from 'lucide-react'

const Quantity = () => {
  const [qty, setQty] = useState(0)

  const handleProduct = useCallback((amount: number) => {
    setQty((prev) => prev + amount)
  }, [])



  return (
    <div className={styles.qty} >
      <button onClick={() => handleProduct(-1)} ><Minus width={18} height={18} /></button>
      <p>{qty || 0}</p> <button onClick={() => handleProduct(1)} ><Plus width={18} height={18} /></button>
    </div>
  )
}

export default Quantity
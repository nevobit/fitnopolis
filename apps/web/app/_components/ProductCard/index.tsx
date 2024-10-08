import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddToCart from '../../productos/[slug]/_components/AddToCart'
import styles from "./Products.module.css"
import { Product } from 'helebba-sdk'
import { DivisaFormater } from '@repo/tools'
import { Shield, TrendingUp } from 'lucide-react'

const ProductCard = ({ prod }: { prod: Product }) => {
  return (
    <Link key={prod.id} href={`/productos/${prod.slug}`} className={styles.product} >
      <Image src={prod.images[0] || ""} alt={prod.name} width={130} height={130} />
      <p title='Marca' className={styles.brand} >{prod.brand}</p>
      <h3 title='Nombre' className={styles.name} >{prod.name}</h3>
      <p title='Categoria' className={styles.category} >{prod.categories[0]?.name}</p>
      <h3 title='Precio' className={styles.price} >{DivisaFormater({ value: prod.price })}</h3>
      <AddToCart style={{ marginTop: 30, marginBottom: 20, height: 35, fontWeight: 500, fontSize: 14, textTransform: "capitalize" }} {...prod} />
      <p className={styles.info} ><TrendingUp width={15} height={15} /> {Math.floor(Math.random() * 50) + 10} personas han comprado esto</p>
      <p className={styles.info} ><Shield width={15} height={15} /> Garantía de devolución de 30 días</p>
    </Link>
  )
}

export default ProductCard
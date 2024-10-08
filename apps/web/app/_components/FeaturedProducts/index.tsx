import Image from 'next/image'
import React from 'react'
import styles from "./Products.module.css"
import { helebba } from '../../../utils';
import Link from 'next/link';
import { DivisaFormater } from '@repo/tools';
import AddToCart from '../../productos/[slug]/_components/AddToCart';
import { Shield, TrendingUp } from 'lucide-react';

export const dynamic = 'force-dynamic';

const FeaturedProducts = async () => {
  const products = await helebba.listProducts();

  return (
       <section className={styles.products}>
        <h2 className={styles.subtitle} >Productos destacados</h2>

        <div className={styles.categories}>
          {products.items.slice(0, 4).map(product => (
            <Link href={`productos/${product.slug}`} key={product.id} className={styles.product} >
              <Image src={product.images[0] || ""} alt={product.name} width={130} height={130} />
              <p title='Marca' className={styles.brand} >{product.brand}</p>
              <h3 title='Nombre' className={styles.name} >{product.name}</h3>
              <p title='Categoria' className={styles.category} >{product.categories[0]?.name}</p>
              <h3 title='Precio' className={styles.price} >{DivisaFormater({ value: product.price })}</h3>
              <AddToCart style={{ marginTop: 30, marginBottom: 20, height: 35, fontWeight: 500, fontSize: 14, textTransform: "capitalize" }} {...product} />
              <p className={styles.info} ><TrendingUp width={15} height={15} /> {Math.floor(Math.random() * 50) + 10} personas han comprado esto</p>
              <p className={styles.info} ><Shield width={15} height={15} /> Garantía de devolución de 30 días</p>
            </Link>
          ))}
          
        </div>
      </section>
  )
}

export default FeaturedProducts
import Image from 'next/image'
import React from 'react'
import styles from "./Products.module.css"
import { helebba } from '../../../utils';
import Link from 'next/link';
import { DivisaFormater } from '@repo/tools';

export const dynamic = 'force-dynamic';

const FeaturedProducts = async () => {
  const products = await helebba.listProducts();

  return (
       <section className={styles.products}>
        <h2 className={styles.subtitle} >Productos destacados</h2>

        <div className={styles.categories}>
          {products.items.slice(0, 4).map(product => (
<Link href={`productos/${product.slug}`} className={styles.product} >
            <Image src={product.images[0] || ""} alt={product.name} width={150} height={150} />
              <h3 title='Nombre' className={styles.name} >{product.name}</h3>
              <p title='Categoria' className={styles.category} >{ product.categories[0]?.name}</p>
              <h3 title='Precio' className={styles.price} >{DivisaFormater({ value: product.price })}</h3>
              
            
          </Link>
          ))}
          
        </div>
      </section>
  )
}

export default FeaturedProducts
import Image from 'next/image'
import React from 'react'
import styles from "./Products.module.css"
import { helebba } from '../../../utils';

export const dynamic = 'force-dynamic';

const FeaturedProducts = async () => {
  const products = await helebba.listProducts();

  return (
       <section className={styles.products}>
        <h2 className={styles.subtitle} >Productos destacados</h2>

        <div className={styles.categories}>
          {products.items.slice(0, 9).map(product => (
<div>
            <Image src={product.images[0] || ""} alt={product.name} width={150} height={150} />
              <h3>{ product.name}</h3>
          </div>
          ))}
          
        </div>
      </section>
  )
}

export default FeaturedProducts
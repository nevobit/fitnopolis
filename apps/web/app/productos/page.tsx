import React from 'react'
import { helebba } from '../../utils'
import Image from 'next/image';
import { DivisaFormater } from '@repo/tools';
import styles from "./Products.module.css";
import Link from 'next/link';

const Products = async () => {
  const products = await helebba.listProducts();
  
  return (
    <div className={styles.container}>
      <section className={styles.section} >
        {products.items.map(product => (
          <Link href={`productos/${product.slug}`}  className={styles.product} key={product.id} >
            <div>
              <Image src={product.images[0]!} width={150} height={150} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>{ DivisaFormater( { value: product.price })}</p>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Products
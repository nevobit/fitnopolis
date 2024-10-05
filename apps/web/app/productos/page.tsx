import React from 'react'
import { helebba } from '../../utils'
import Image from 'next/image';
import { DivisaFormater } from '@repo/tools';
import styles from "./Products.module.css";
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const Products = async () => {
  const products = await helebba.listProducts();
  return (
    <div className={styles.container}>
      <div className={styles.header} >
        <p>Productos {products.count}</p>
        

      </div>
      <div className={styles.products} >

        {products.items.map(product => (
     <Link href={`productos/${product.slug}`} className={styles.product} >
            <Image src={product.images[0] || ""} alt={product.name} width={90} height={90} />
              <h3 title='Nombre' className={styles.name} >{product.name}</h3>
              <p title='Categoria' className={styles.category} >{ product.categories[0]?.name}</p>
              <h3 title='Precio' className={styles.price} >{DivisaFormater({ value: product.price })}</h3>
              
            
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Products
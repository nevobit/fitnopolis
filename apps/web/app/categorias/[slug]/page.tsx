import React from 'react'
import { helebba } from '../../../utils';
import Link from 'next/link';
import Image from 'next/image';
import { DivisaFormater } from '@repo/tools';
import styles from "./Products.module.css"

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const Categories = async ({
  params,
}: Props) => {

  const listProducts = await helebba.listProducts();
  const products = listProducts.items.filter((product) => 
    product.categories.some((category) => 
        category.name.toLowerCase() === params.slug.toLowerCase()
    )
);

  return (
    <div>
            {products.map(product => (
              <Link href={`productos/${product.slug}`} className={styles.product} >
                <Image src={product.images[0] || ""} alt={product.name} width={90} height={90} />
                <h3 title='Nombre' className={styles.name} >{product.name}</h3>
                <p title='Categoria' className={styles.category} >{product.categories[0]?.name}</p>
                <h3 title='Precio' className={styles.price} >{DivisaFormater({ value: product.price })}</h3>


              </Link>
        ))}
    </div>
  )
}

export default Categories
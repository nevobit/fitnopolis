import React from 'react'
import { helebba } from '../../../utils';
import Link from 'next/link';
import Image from 'next/image';
import { DivisaFormater } from '@repo/tools';
import styles from "./Products.module.css"
import AddToCart from '../../productos/[slug]/_components/AddToCart';
import { Shield, TrendingUp } from 'lucide-react';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const Categories = async ({
  params,
}: Props) => {

  const listProducts = await helebba.listProducts();
  const products = listProducts?.items?.filter((product) => 
    product.categories.some((category) => 
        category.name.toLowerCase() === params.slug.toLowerCase()
    )
  ) as any;

  return (
    <div className={styles.container} >
      <h1> {products[0]?.categories[0]?.name || "Sin resultados"} </h1>
      <div className={styles.products}>
        {products?.map((product: any) => (
              <Link href={`/productos/${product.slug}`} key={product.id} className={styles.product} >
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
    </div>

  )
}

export default Categories
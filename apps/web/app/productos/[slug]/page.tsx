import React from 'react'
import { helebba } from '../../../utils';
import { ResolvingMetadata } from 'next';
import styles from "./Product.module.css"
import Image from 'next/image';
import { DivisaFormater } from '@repo/tools';
import AddToCart from './_components/AddToCart';
import Images from './Images';
import { TrendingUp } from 'lucide-react';
import Quantity from './Quantity';
import ProductCard from '../../_components/ProductCard';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata,
) {
  const product = await helebba.getProduct(slug);;
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: product.name,
    alternates: {
      cannonical: `/productos/${slug}`,
    },
    openGraph: {
      images: [product?.images?.[0], ...previousImages],
    },
  };
}
const Product = async ({
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { [key: string]: string };
}) => {
  const { slug } = params;
  const product = await helebba.getProduct(slug!);
  const products = await helebba.listProducts();


  return (
    <div className={styles.body}>
    <div className={styles.container}>
      <div className={styles.product} >
        <div>
            <Image src={product.images[0] ? product.images[0] : "/noi.png"} alt={product.name} width={400} height={400} />
            <Images images={product.images} name={product.name} />
        </div>
        <div>
            <p className={styles.brand} >{product.brand}</p>
            <h1 className={styles.title} >{product.name}</h1>
            <p className={styles.category} >{product.categories[0]?.name}</p>

            <h2 className={styles.price} >{DivisaFormater({ value: product.price })}</h2>
            <p className={styles.desc} >{product.desc}</p>

            {product.variants.length > 0 && (
              <h3 className={styles.subtitle} >Colores Disponibles</h3>               
            )}
          <div className={styles.variants}>
            {product.variants.map((variant) => (
              <div key={variant.id} className={styles.variant} >
                {variant.color && (
                  <span key={variant.id} style={{ backgroundColor: variant.color }} className={styles.color} ></span>
                )}
              </div>
            ))}
            </div>

            <h3 className={styles.subtitle} >Cantidad</h3>
            <Quantity />
            <AddToCart slug={product.slug} id={product.id} name={product.name} images={product.images} price={product.price} />

            <div className={styles.infos} >
              <p className={styles.info}>
                <span >{product.stock}</span> unidades disponibles - ¡pide pronto!
              </p>
              <p className={styles.info} >
                <TrendingUp />
                <span >{Math.floor(Math.random() * 50) + 10}</span> vendidos en los últimos 7 días
              </p>
            </div>


          
          </div>
        </div>

        <div className={styles.similar_container} >
          <h2>Productos Similares</h2>
          <div className={styles.similar} >
            {products.items.slice(0, 4).filter((prod) => prod.categoryId == product.categoryId).map((prod) => (
              <ProductCard key={prod.id} prod={prod} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
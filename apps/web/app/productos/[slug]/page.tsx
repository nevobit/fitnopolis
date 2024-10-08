import React from 'react'
import { helebba } from '../../../utils';
import { ResolvingMetadata } from 'next';
import styles from "./Product.module.css"
import Image from 'next/image';
import { DivisaFormater } from '@repo/tools';
import AddToCart from './_components/AddToCart';

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

  return (
    <div className={styles.body}>
    <div className={styles.container}>
      <div className={styles.product} >
        <div>
          <Image src={product.images[0]!} alt={product.name} width={400} height={400} />
          <div className={styles.images} >
            {product.images.map((image) => (
              <Image src={image} alt={product.name} width={120} height={120} />
            ))}
          </div>
        </div>
        <div>
          <p className={styles.category} >{product.categories[0]?.name}</p>
          <h1>{product.name}</h1>
          <h2>{DivisaFormater({ value: product.price })}</h2>

            {product.variants.length > 0 && (
              <h3 className={styles.subtitle} >Colores Disponibles</h3>               
            )}
          <div className={styles.variants}>
            {product.variants.map((variant) => (
              <div className={styles.variant} >
                {variant.color && (
                <span style={{ backgroundColor: variant.color }} className={styles.color} ></span>
                )}
              </div>
            ))}
          </div>

          <p className={styles.desc} >{product.desc}</p>

          
          <AddToCart slug={product.slug} id={product.id} name={product.name} images={product.images} price={product.price} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Product
import React from 'react'
import { helebba } from '../../../utils';
import Link from 'next/link';
import Image from 'next/image';
import { DivisaFormater } from '@repo/tools';

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
          <Link href={`/productos/${product.slug}`}   key={product.id} >
            <div>
              <Image src={product.images[0]!} width={150} height={150} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>{ DivisaFormater( { value: product.price })}</p>
          </Link>
        ))}
    </div>
  )
}

export default Categories
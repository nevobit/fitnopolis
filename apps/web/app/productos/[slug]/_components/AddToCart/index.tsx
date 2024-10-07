'use client';

import React from 'react';
import styles from '../../Product.module.css';
import { useRouter } from 'next/navigation';
import { useCartStore } from '../../../../../store';

const AddToCart = ({ slug, id, name, images, price }: any) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const router = useRouter();

  const addToCart = () => {
    addProductToCart({
      id: id!,
      slug,
      name,
      quantity: 1,
      image: images[0],
      price,
    });
    const url = `/carrito`;
    router.push(url);
  };

  return (
    <button onClick={addToCart} className={styles.btn}>
      Añadir al carrito
    </button>
  );
};

export default AddToCart;
"use client"

import Image from 'next/image'
import React from 'react'
import styles from "./Product.module.css"

const Images = ({ images, name }: { images: string[], name: string }) => {
  return (
    <div className={styles.images} >
      {images?.map((image) => (
        <Image key={image} src={image ? image : "/noi.png"} alt={name} width={120} height={120} />
      ))}
    </div>
  )
}

export default Images
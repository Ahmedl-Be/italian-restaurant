"use client"
import React from 'react'
import styles from "/components/Featured/featured.module.css"
import Image from 'next/image'
import { featuredProducts } from '/app/data'
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartSlice";

const Featured = () => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {featuredProducts.map(item => (
                    <div className={styles.featured} key={item.id}>
                        {item.img && <Image src={item.img} width="1080"
                            height="1080" alt='' 
                            className={styles.featuredPhoto} />}
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.disc}>{
                        item.desc.length > 150 ?
                        `${item.desc.slice(0,150)}...`:
                        item.desc
                        }</p>
                        <span className={styles.price}>${item.price}</span>
                        <button className={styles.AddToCartBtn}
                        onClick={() => dispatch(addToCart({
                                id:item.id,
                                title:item.title,
                                img:item.img,
                                total:item.price,
                                quantity:1,
                                options:"Small",
                            }))}
                        >Add to Cart</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Featured;
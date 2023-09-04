"use client"
import React from 'react'
import Image from 'next/image';
import styles from "/components/Slider/slider.module.css"
import { useState ,useEffect} from 'react';

const data = [
    {
        id: 1,
        title: "ALWAYS FRESH & ALWAYS CRISPY & ALWAYS HOT",
        image: "/slide1.png",
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in EGY",
        image: "/slide2.png",
    },
    {
        id: 3,
        title: "the best pizza to share with your family",
        image: "/slide3.jpg",
    },
]

const Slider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
            (prevIndex === data.length -1 ? 0 : prevIndex + 1));
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div className={styles.banner}>
            <div className={styles.leftBanner}>
                <h1>
                    {data[currentImageIndex].title.toUpperCase()}
                </h1>
                <button className={styles.bannerBtn}>Order Now</button>
            </div>
            <div className={styles.rightBanner}>
                <Image
                width="1080" 
                height="1080" 
                src={data[currentImageIndex].image} 
                alt=""
                className={styles.imageBanner} 
                />
            </div>
        </div>
    )
}

export default Slider;
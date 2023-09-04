"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useSelector } from 'react-redux/es/hooks/useSelector'
const CartIcon = ({Oppsite}) => {
    const data = useSelector((state)=>state.cart.products)

    return (
            <Link href="/cart" className='flex items-center gap-3'
            onClick={Oppsite}>
                <div className="relative w-6 h-6">
                    <Image src="/cart.png" alt='' fill/>
                </div>
                <span>Cart({data.length===0?0:data.length})</span>
            </Link> 
    )
}

export default CartIcon;
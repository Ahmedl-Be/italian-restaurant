"use client"
import React from 'react'
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.cart.products)

    let totalPrice = () => {
        let all = 0;
        data.forEach((item) => {
            if (typeof item.total === 'number') {
                all += item.total;
            } else if (Array.isArray(item.total)) {
                all += item.total.reduce((acc, current) => acc + current, 0);
            }
        });
        return all.toFixed(2);
    }

    const handleRemoveFromCart = (itemId, size, quantity) => {
        dispatch(removeItem({ itemId, size ,quantity}));
    };


    return (
        <div className='h-screen text-red-500 md:flex 
        justify-between md:gap-1'>

            {/* PRODUCT CONTAINER */}
            <div className='overflow-scroll md:w-1/2 h-1/2 md:h-full'>
                {data.length === 0 ? (
                <p className='text-center mt-[25vh] md:mt-[45vh] uppercase
                text-red-400
                '>
                    Cart is empty</p>
                ):(
                    <>
                    {data.map(item => (
                    <div className='flex items-center justify-between p-3 
            hover:bg-fuchsia-50 md:flex md:items-center md:justify-between'
                        key={item.title + item.options}
                    >
                        <Image alt='' src={item.img} width={100}
                            height={100} className='contain' />
                        <div>
                            <span className='font-bold'>{item.title}</span>
                            <h4>{!item.options ? "Small" : item.options}</h4>
                        </div>
                        <span className='text-xl'>${item.total.toFixed(2)}
                        </span>
                        <span className='text-l'>({item.quantity})</span>
                        <button className='text-red-700 text-lg'
                            onClick={() => 
                        handleRemoveFromCart(item.id,item.options,item.quantity)}
                        >X</button>
                    </div>
                ))}
                    </>
                )}
            </div>

            {/* PAYMENT CONTAINER  */}
            <div className='flex flex-col p-5 gap-3 md:w-1/2 
        bg-fuchsia-50 h-1/2'>
                <div className='flex justify-between'>
                    <span>SubTotal ({data.length} Items)</span>
                    <span>${totalPrice()}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Service Cost</span>
                    <span>$0</span>
                </div>
                <div className='flex justify-between'>
                    <span>Delivery Cost</span>
                    <span className='text-blue-400'>"FREE!!"</span>
                </div>
                <hr className='' />
                <div className='flex justify-between'>
                    <span>Total (INCL. VAT)</span>
                    <span className='font-bold'>${totalPrice()}</span>
                </div>
                <button className='mt-5 bg-red-500 p-5 text-white rounded
            w-1/2'>
                    CHECKOUT</button>
            </div>
        </div>
    )
}

export default Cart;
import React from 'react'
import { pizzas } from '../../data';
import Image from 'next/image';
import Price from "../../../components/Price/Price.jsx"
const SingleProduct = ({params}) => {
    let selected = pizzas.filter(product => product.id == params.id)
    const dataObject = selected[0];

    return (
        <div className='flex flex-col lg:flex-row lg:px-[10%]
        lg:h-screen px-[10%] mt-20 lg:mt-20 mb-16 gap-10
        items-center lg:gap-[10%]'>
                <div>
                    <Image  src={dataObject.img} alt='' width="500"
                    height="500" className='lg:w-[80vh]'
                    />
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-red-500 font-bold text-4xl '>
                        {dataObject.title}</h1>
                    <p className='text-red-300'>
                        {dataObject.desc}</p>
                    <Price price = {dataObject.price}
                    options = {dataObject.options}
                    id = {dataObject.id}
                    img= {dataObject.img}
                    title={dataObject.title}
                    />
                </div>
        </div>
    )
}

export default SingleProduct;
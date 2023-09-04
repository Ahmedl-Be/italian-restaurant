import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
    <div className='flex justify-between items-start 
    p-5 text-red-500 bg-red-100'>
            <Link href="/" className='font-bold'>
                MASSIOM
            </Link>
            <div className=''>
                <p>All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
"use client"
import styles from  "/components/Nav/nav.module.css"
import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import open from "/public/open.png"
import close from "/public/close.png"
import CartIcon from "./CartIcon"
import Phone from "/public/phone.png"
import SigninButton from "../SinginButton"

const MobileNav = () => {
    const [Isopened, setIsopend] = useState(false)
    const setTOOppsite = ()=>{
        setIsopend(prev=>!prev)
    }
    return (
        <div className={styles.mobileNav}>
            <div className={`${styles.mNav} border-b-2 border-b-red-500`}>
            <span className={`${styles.leftIcons} font-bold`}>MASSIOM</span>
            <button className={styles.navBtn} 
            onClick={setTOOppsite}>
                {Isopened ?
                <Image src={close} alt="open" className="w-5"/>:
                <Image src={open} alt="open" className="w-5 "/>
                }
            </button>
            </div>

            {Isopened && <div className={styles.sideNav}>
                <Link href="/" className='link' onClick={setTOOppsite}>
                    HOME
                </Link>
                <Link href="/menu" onClick={setTOOppsite}>MENU</Link>
                <Link href="/" onClick={setTOOppsite}>CONTACT</Link>
                <SigninButton />
                {/* <Link href="/login" onClick={setTOOppsite}>LOGIN</Link> */}
                <Link href="/orders" onClick={setTOOppsite}>ORDERS</Link>
                <CartIcon Oppsite={setTOOppsite}/>
                <div className={`${styles.phoneNum} flex items-center`}>
                    <Image src={Phone} alt=''className='w-8 bg-orange-300 
                    rounded-tl rounded-bl'/>
                    <span className="bg-orange-300 px-1 rounded-tr 
                    rounded-br">555-44-00</span>
                    </div>
            </div>}
        </div>
    )
}

export default MobileNav;
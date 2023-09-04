import Link from 'next/link'
import styles from  "/components/Nav/nav.module.css"
import MobileNav from './MobileNav'
import CartIcon from './CartIcon'
import Phone from "/public/phone.png"
import Image from 'next/image'

const Nav = () => {
    return (
        <>
            <div className={styles.sale}>
                Free delivery for all Orders over $50 !!
            </div>
            <nav className={`${styles.navBar} border-b-2 border-b-red-500 `} >
                <div className={styles.rigthLinks}>
                    <Link href="/" className={styles.link}>HOME</Link>
                    <Link href="/menu">MENU</Link>
                    <Link href="/">CONTACT</Link>
                </div>
                <span className={`${styles.logo} font-bold`}>MASSIOM</span>
                <div className={styles.leftIcons}>
                    <div className={`flex items-center`}>
                    <Image src={Phone} alt=''className='w-6  bg-orange-300 
                    rounded-tl rounded-bl'/>
                    <span className="bg-orange-300 px-1 rounded-tr 
                    rounded-br">555-44-00</span>
                    </div>
                    <Link href="/login" className='font-bold uppercase'>
                        Login</Link>
                    <Link href="/orders">Orders</Link>
                    <CartIcon />
                </div>
            </nav>
            {/* mobile navagation */}
                <MobileNav />
        </>
    )
}

export default Nav;
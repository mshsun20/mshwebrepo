import React from 'react';
import style from '@/app/styles/navbar.module.css'
import Link from "next/link";

const Header = () => {
    return (
        <>
             <header>
                 <div className={style.hdr}>
                     <div className={style.icon}>
                         <Link href='/'>MSHWeb</Link>
                     </div>
                     <div className={style.nav}>
                         <Link href='/'>Home</Link>
                         <Link href='/about'>About Us</Link>
                         <Link href='/services'>Services</Link>
                         <Link href='/contact'>Contact Us</Link>
                     </div>
                 </div>
             </header>
        </>
    );
};

export default Header;
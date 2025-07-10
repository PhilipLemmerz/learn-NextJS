

import Link from "next/link";
import classes from './header.module.css'
import logoImage from '@/assets/logo.png';
import Image from "next/image";
import HeaderBG from '@/components/header-bg';
import { NavLink } from "./nav-link";

function Header() {  
    return (
        <>
            <HeaderBG />
            <header className={classes.header}>

                <Link className={classes.logo} href="/">
                    <Image src={logoImage} alt="food plate" priority />     {/*  priority -> Image bevorzugt laden beim lazy loading*/}
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <NavLink href="/meals" item="meals" />
                        <NavLink href="/community" item="community" />
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
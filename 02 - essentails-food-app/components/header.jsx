import Link from "next/link";

import classes from './header.module.css'
import logoImage from '@/assets/logo.png';
import Image from "next/image";

function Header() {
    return <header className={classes.header}>
        <Link className={classes.logo} href="/">
         <Image src={logoImage} alt="food plate" priority />     {/*  priority -> Image bevorzugt laden beim lazy loading*/}
            NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <Link href="/meals"><li>Brwose Meals</li></Link>
                <Link href="/community"><li>Foodies Community</li></Link>
            </ul>
        </nav>
    </header>

}

export default Header
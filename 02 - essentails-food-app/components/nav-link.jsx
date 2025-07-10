'use client'

import Link from "next/link"
import classes from './nav-link.module.css'
import { usePathname } from "next/navigation";

export function NavLink({ href, item }) {

    const path = usePathname();

    return (
        <Link href={href} className={path.startsWith(href) ? classes.active : undefined}><li>{item}</li></Link>
    )
}
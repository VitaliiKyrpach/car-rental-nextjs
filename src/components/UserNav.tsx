'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export const UserNav = () =>{
    const pathname = usePathname()
    return <div className='links'>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>Home</Link>
        <Link className={`link ${pathname === '/catalog' ? 'active' : ''}`} href='/catalog'>Catalog</Link>
        <Link className={`link ${pathname === '/favorites' ? 'active' : ''}`} href='/favorites'>Favorites</Link>
    </div>
}
'use client'
import { styleText } from 'node:util'
import StyleCT from './Category.module.scss'
import Container from 'react-bootstrap/Container'
import Link from 'next/link'
export default function Category() {
    return (
        <div className={StyleCT.MenuCategory} >
            <div className={StyleCT.Item}><Link href={'#/'} >HEHEHEHE</Link></div>
            <div className={StyleCT.Item}><Link href={'#/'} >HEHEHEHE</Link></div>
            <div className={StyleCT.Item}><Link href={'#/'} >HEHEHEHE</Link></div>
            <div className={StyleCT.Item}><Link href={'#/'} >HEHEHEHE</Link></div>
            <div className={StyleCT.Item}><Link href={'#/'} >HEHEHEHE</Link></div>
            <div className={StyleCT.Item}><Link href={'#/'} >HEHEHEHE</Link></div>
            <div className={StyleCT.Item}><Link href={'#/'} >HEHEHEHE</Link></div>
            <div className={StyleCT.Item}><Link href={'#/'} >HEHEHEHE</Link></div>
            <div className={StyleCT.Item}><Link href={'#/'} >HEHEHEHE</Link></div>
            <div className={StyleCT.Item}><Link href={'#/'} >HEHEHEHE</Link></div>
        </div>
    )
}
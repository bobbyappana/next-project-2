import Link from 'next/link'
import React from 'react'
import classesstyles from "../components/header.module.css"
const Header = () => {
    return (
        <header className={classesstyles.header}>
            <div className={classesstyles.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link href="/news" >News</Link>
                    </li>
                    <li>
                        <Link href="/news/sports" >Sports</Link>
                    </li>
                    <li>
                        <Link href="/news/id" >Dynamic</Link>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Header
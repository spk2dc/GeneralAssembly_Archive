import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navBar">
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/shop'>SHOP</Link>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Moviefinder.png"
import Home from '../pages/Home'

export default function Nav() {
  return (
    <>
        <nav>
            <Link to="/" element={<Home/>} className='logo__wrapper'>
            <img src={Logo} alt="" className="logo" />
            </Link>
            <ul className="nav__link--list">
                <li className="nav__link">
                    <Link to="/" className="nav__link--anchor">Home</Link>
                </li>
                <li className="nav__link ">
                    <Link to="/" className="nav__link--anchor no-cursor">Discover</Link>
                </li>
                <li className="nav__link ">
                    <Link to="/" className="nav__link--anchor nav__link--anchor-primary no-cursor">Contact</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

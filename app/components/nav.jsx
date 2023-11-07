"use client"
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleNavbar = () => {
    setIsOpen(!isOpen);
 };

 return (
    <nav className="mobile-nav">
      <div className="navbar-brand">
        <Link href="/">
            Anduru
        </Link>
        <button className="navbar-burger" onClick={toggleNavbar}>
        <AiOutlineMenu/>
        </button>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link href="/" className='page-link'>
            Home
          </Link>
          <Link href="./services" className='page-link'>
            Services
          </Link>
          <Link href="./projects" className='page-link'>
            Projects
          </Link>
          <Link href="./about" className='page-link'>About us</Link>
          <Link href="./contact" className='page-link'>Contact us</Link>
        </div>
      </div>
    </nav>
 );
};

export default Navbar;
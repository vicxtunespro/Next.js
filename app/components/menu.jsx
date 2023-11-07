import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMenu  } from 'react-icons/ai';
import Link from 'next/link';

export default function menu() {
  return (
    <div>
        <div className='header'>
          <div className='header-contacts bg-primary'>
            <div className='logo'>Andru</div>
            <div className='social-media'>
            <p className='contacts'>Tel: 0787681472/0758019072</p>
              <div class="icons">
                <AiFillFacebook/>
                <AiFillInstagram/>
                <AiFillLinkedin/>
              </div>
            </div>
          </div>
          <div className='navbar desktop bg-last'>
            <div className='menu-icon'>
            <AiOutlineMenu/>
            </div>
            <nav>
              <Link href="/" className='page-link'>Home</Link>
              {/* Drop-down */}
              <div class="dropdown">
                <Link href="/services" className='page-link'>Services</Link>
                  <div className='dorpdown-content'>
                  <Link href="#" className='drop'>Plubing Services</Link>
                  <Link href="#" className='drop'>Electrical Services</Link>
                  <Link href="#" className='drop'>Constraction Services</Link>
                  </div>
              </div>
              <Link href="/projects" className='page-link'>Projects</Link>
              <Link href="/about" className='page-link'>About us</Link>
              <Link href="/contact" className='page-link'>Contact us</Link>
            </nav>
          </div>
        </div>
    </div>
  )
}

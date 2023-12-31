import { Inter } from 'next/font/google'
import './globals.scss'

import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMenu  } from 'react-icons/ai';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anduru Ltd',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          
        <div className='header'>
          <div className='header-contacts bg-primary'>
            <div className='logo'>Andru</div>
            <div className='social-media'>
            <p className='contacts'>Tel: 0787681472</p>
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
              <Link href="#" className='page-link'>Home</Link>
              {/* Drop-down */}
              <div class="dropdown">
                <Link href="#" className='page-link droper'>Services</Link>
                  <div className='dropdown-content'>
                  <Link href="#" className='page-link'>Constraction Services</Link>
                  <Link href="#" className='page-link'>Plubing Services</Link>
                  <Link href="#" className='page-link'>Electrical Services</Link>
                  </div>
              </div>
              <Link href="#" className='page-link'>Projects</Link>
              <Link href="#" className='page-link'>About us</Link>
              <Link href="#" className='page-link'>Contact us</Link>
            </nav>
          </div>
        </div>  
        {children}
      </body>
    </html>
  )
}

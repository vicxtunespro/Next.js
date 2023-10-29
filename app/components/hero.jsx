import React from 'react'

export default function Hero() {
  return (
    <div className='w-screen hero'>
        <div className='overlay'>
            <h3 className='headline'>Your success partner </h3>
            <p className='hero-content'>Get all technical service for your dream house. Cheap and good quality work</p>
            <div className="action-btn pt-3 pr-3">
                <button className='action1'>View all service</button>
                <button className='action2'>Get in touch</button>
            </div>
        </div>
    </div>
  )
}

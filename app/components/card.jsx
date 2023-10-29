import Image from 'next/image'
import React from 'react'

export default function ServiceCard({image, title, shortDescription}) {
  return (
    <div className='card'>
        <div className='card-img'>
            <Image
            src={image}
            fill
            alt='Card-image'
            />
        </div>
        <div className='card-content'>
            <h3 className="card-title">{title}</h3>
            <p>{shortDescription}</p>
        </div>
    </div>
  )
}

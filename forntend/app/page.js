import ServiceCard from './components/card'
import Hero from './components/hero'
import services from './data/services'
import React from 'react'

export default function page() {
  return (
    <div className='main'>
      <Hero/>
      <div className='card-group'>
        {
          services.map((service)=>(
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              shortDescription={service.shortDescription}
            />
          ))
        }
      </div>
    </div>
  )
}

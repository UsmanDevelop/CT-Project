import React from 'react'
import TiltedCard from '../Components/TiltedCard'

function Services() {
  return (
    <section className="bg-black text-white py-16 px-8 h-screen pt-7">
      <div className="text-center">
        <h3 className="text-orange-500 uppercase tracking-widest">Our Services</h3>
        <h2 className="text-4xl font-bold mt-2">
          What We <span className="text-orange-500">Do.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 ">
        {/* Service Card */}
        <TiltedCard
          // imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          containerHeight="300px"
          containerWidth="300px"
          rotateAmplitude={20}
          headingText={'Safe & Sound Deliveries'}
          paraText={'Your parcels arrive in perfect condition—no damage, no worries!'}
        />
        
        <TiltedCard
          // imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          containerHeight="300px"
          containerWidth="300px"
          rotateAmplitude={20}
          headingText={'Lightning-Fast Delivery'}
          paraText={'Get your package within 3 days, anywhere in Pakistan!'}
        />
        
        <TiltedCard
          // imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          containerHeight="300px"
          containerWidth="300px"
          headingText={'Instant & Secure Payments'}
          paraText={'Your earnings land safely in your account within 24 hours.'}
        />
        
        <TiltedCard
          // imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          headingText={'No Delays, No Hassles'}
          paraText={'Say goodbye to pending payments—get paid on time, every time.'}
        />
      </div>
    </section>
  )
}

export default Services

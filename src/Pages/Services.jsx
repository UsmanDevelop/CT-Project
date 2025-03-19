import React from 'react'
import TiltedCard from '../Components/TiltedCard'
import { easeInOut, motion } from 'framer-motion'
import safeDelivery from './../assets/safedelivery.png'
import hassle from './../assets/HASSLE.png'
import clock from './../assets/LIGHTNINGFAST.png'
import phone from './../assets/INSTANT.png'

function Services() {
  return (
    <section className="bg-black text-white py-16 px-8 h-fit md:h-contain pt-7 mb-10">
      <div className="text-center">
        <h3 className="text-orange-500 uppercase tracking-widest">Our Services</h3>
        <h2 className="text-4xl font-bold mt-2">
          What We <span className="text-orange-500">Do.</span>
          {/* <svg 
            width="220"
            height="88"
            className='relative top-[-70px] left-135 hidden xl:block' 
            viewBox="0 0 220 88" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            
            <motion.path
              initial={{pathLength:0}}
              whileInView={{pathLength:1}}
              transition={{
                duration:2,
                ease:easeInOut
              }}
              d="M96.5472 10.251C96.5472 10.251 81.0823 25.9776 39.1776 27.8278C-2.72723 29.678 0.138381 43.084 1.76254 62.0565C3.42994 81.5341 183.35 102.761 214.28 69.9198C223.853 59.7552 219.268 35.2286 196.819 39.3916C174.37 43.5545 141.778 38.2447 109.019 27.8278C85.2834 20.2805 51.6492 1 51.6492 1" 
              stroke="white"
              strokeWidth='2'

            />
            </svg> */}

        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12 item-center ">
        {/* Service Card */}
        <TiltedCard
          // imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          containerHeight="350px"
          containerWidth="300px"
          rotateAmplitude={20}
          headingText={'Safe & Sound Deliveries'}
          paraText={'Your parcels arrive in perfect condition—no damage, no worries!'}
          img={safeDelivery}
        />
        
        <TiltedCard
          // imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          containerHeight="350px"
          containerWidth="300px"
          rotateAmplitude={20}
          headingText={'Lightning-Fast Delivery'}
          paraText={'Get your package within 3 days, anywhere in Pakistan!'}
          img={clock}
        />
        
        <TiltedCard
          // imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          containerHeight="350px"
          containerWidth="300px"
          headingText={'Instant & Secure Payments'}
          paraText={'Your earnings land safely in your account within 24 hours.'}
          img={phone}
        />

        <TiltedCard
          // imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          containerHeight="350px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          headingText={'No Delays, No Hassles'}
          paraText={'Say goodbye to pending payments—get paid on time, every time.'}
          img={hassle}
        />
      </div>
    </section>
  )
}

export default Services



import React from 'react'

import pickup from './../assets/PICKUP.png'
import secure from './../assets/SECURETRANSIT.png'
import forwarding from './../assets/FORWARDING.png'
import finalDelivery from './../assets/FINALDELIVERY.png'
import payment from './../assets/PAYMENTTRANSFER.png'
import path from './../assets/PATH.png'
import mobilePath from './../assets/PATHMOBILE.png'



const steps = [
  { title: "Pickup from Your Location", description: "Our rider picks up your parcel from your home or office.", img: pickup, position: "xl:top-[-7rem] xl:left-[6rem] top-[-10rem] left-[-2rem]" },
  { title: "Secure Transit to Warehouse", description: "The parcel is safely stored in our warehouse before forwarding.", img: secure, position: "xl:top-[-1rem] xl:left-[30rem] left-[-12rem] top-[5rem] sm:left-[-22rem] md:left-[-26rem] lg:left-[-30rem]" },
  { title: "Forwarding to Destination", description: "We process and send the parcel to the destination warehouse.", img: forwarding, position: "xl:top-[10rem] xl:left-[-50rem] left-[15rem] top-[-2rem]" },
  { title: "Final Delivery Attempt", description: "Our rider delivers the parcel to your client, attempting 2-3 times if needed.", img: finalDelivery, position: "xl:top-[-5rem] xl:left-[35rem] left-[-12rem] sm:left-[-22rem] md:left-[-26rem] lg:left-[-30rem] top-[9rem]" },
  { title: "Payment Transfer or Return", description: "Successful delivery? Your payment is transferred. If returned, the parcel comes back safely.", img: payment, position: "xl:top-[4rem] xl:left-[-56rem] right-[-12rem] top-[2rem] sm:right-[-23rem] sm:top-[5rem]" },
];


function HowItWorks() {
  return (
    <>
      <div className='w-full flex flex-col items-center'>

        <div className="h-fit pt-10 text-center font-bold font-sans bg-gradient-to-l from-black to-yellow-900 mb-6 w-full">
          <span className='text-5xl text-gray-300'>HOW IT </span>
          <span className="text-[#fe971e] text-5xl">WORKS?</span>
          <p className="text-2xl text-[#5c534d] p-2">Seamless & Secure Deliveries</p>
        </div>

        <div className="relative bg-black text-white py-10 px-5">
          <div className="max-w-5xl mx-auto relative">

            <div className="flex flex-row flex-wrap justify-between">
              <img src={path} className='xl:visible absolute invisible'/>
              <img src={mobilePath} className='xl:invisible absolute visible top-[2rem] left-[30%] h-sreen'/>
              {steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col items-center text-center p-5 w-1/2 xl:w-1/3 ${step.position} ${index % 2 === 0 ? "md:self-start" : "md:self-end"} `}>
                  <img src={step.img} alt={step.title} className="h-66 w-66 mb-[-80px]" />
                  <h3 className="font-bold text-lg mt-3">{step.title}</h3>
                  <p className="text-gray-400 hidden xl:block text-sm text-center p-6 xl:mr-5 xl:ml-5">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HowItWorks

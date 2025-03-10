import React from 'react'
import ShapeBlur from '../Components/ShapeBlur'

import pickup from './../assets/PICKUP.png'
import secure from './../assets/SECURETRANSIT.png'
import forwarding from './../assets/FORWARDING.png'
import finalDelivery from './../assets/FINALDELIVERY.png'
import payment from './../assets/PAYMENTTRANSFER.png'




const steps = [
  {
    title: "Pickup from Your Location",
    description: "Our rider picks up your parcel from your home or office.",
    img: pickup,
  },
  {
    title: "Secure Transit to Warehouse",
    description: "The parcel is safely stored in our warehouse before forwarding.",
    img: secure,
  },
  {
    title: "Forwarding to Destination",
    description: "We process and send the parcel to the destination warehouse.",
    img: forwarding,
  },
  {
    title: "Final Delivery Attempt",
    description: "Our rider delivers the parcel to your client, attempting 2-3 times if needed.",
    img: finalDelivery,
  },
  {
    title: "Payment Transfer or Return",
    description: "Successful delivery? Your payment is transferred. If returned, the parcel comes back safely.",
    img: payment,
  },
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
            <div className="absolute top-1/2 left-5  m-4 w-full h-2 bg-gray-700 rounded-full hidden lg:block"></div>

            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
              {steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col items-center text-center p-5 md:w-1/2 lg:w-1/3 ${index % 2 === 0 ? "md:self-start" : "md:self-end"}`}>
                  {/* <div className="w-6 h-6 bg-orange-500 rounded-full absolute -top-3 md:-left-3 md:top-1/2"></div> */}

                  <ShapeBlur
                    className={`h-[10px] overflow-hidden absolute hidden md:block`}
                    variation={0}
                    pixelRatioProp={window.devicePixelRatio || 1}
                    shapeSize={1.9}
                    roundness={0.5}
                    borderSize={0.07}
                    circleSize={0.5}
                    circleEdge={1}
                  />
                  <img src={step.img} alt={step.title} className="h-66 w-66 mb-[-80px]" />
                  <h3 className="font-bold text-lg mt-3">{step.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm text-center p-6 mr-10 ml-10">{step.description}</p>
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

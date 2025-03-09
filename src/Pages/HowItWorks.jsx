import React from 'react'
import path from './../assets/PATH.png'
import NormalCard from './../Components/NormalCard'

function HowItWorks() {
  return (
    <>
      <div className='w-full flex flex-col items-center'>

        <div className="h-fit pt-10 text-center font-bold font-sans bg-gradient-to-l from-black to-yellow-900 mb-6 w-full">
          <span className='text-5xl text-gray-300'>HOW IT </span>
          <span className="text-[#fe971e] text-5xl">WORKS?</span>
          <p className="text-2xl text-[#5c534d] p-2">Seamless & Secure Deliveries</p>
        </div>

        <div className='h-contain flex item-center flex-col justify-center align-middle'>
          <img className=' h-200 w-250' src={path} />
        </div>

        <div className='bg-red-50'>
          THIS IS ME

        </div>
          <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4' style={{ position: 'absolute', overflow: 'hidden' }}>
            <NormalCard
              className='col-span-4'
              variation={0}
              pixelRatioProp={window.devicePixelRatio || 1}
              shapeSize={1.1}
              roundness={0.45}
              borderSize={0.05}
              circleSize={0.5}
              circleEdge={1}
            />
            <NormalCard
              variation={0}
              pixelRatioProp={window.devicePixelRatio || 1}
              shapeSize={1.1}
              roundness={0.45}
              borderSize={0.05}
              circleSize={0.5}
              circleEdge={1}
            />
            <NormalCard
              variation={0}
              pixelRatioProp={window.devicePixelRatio || 1}
              shapeSize={1.1}
              roundness={0.45}
              borderSize={0.05}
              circleSize={0.5}
              circleEdge={1}
            />
            <NormalCard
              variation={0}
              pixelRatioProp={window.devicePixelRatio || 1}
              shapeSize={1.1}
              roundness={0.45}
              borderSize={0.05}
              circleSize={0.5}
              circleEdge={1}
            />
          </div>
      </div>
    </>
  )
}

export default HowItWorks

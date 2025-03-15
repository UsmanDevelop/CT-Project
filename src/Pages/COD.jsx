import React from 'react'
import NavBar from './../Components/NavBar'
// import { Globe } from "@/registry/magicui/globe";
function COD() {
  return (
    <>
      {/* <div className="bg-black h-screen text-white w-full h-fit px-12 bg-radial-[at_90%_80%] from-[#fe971e] to-15%"
        style={{
          WebkitMaskImage: "radial-gradient(circle at 90% 90%, transparent 90%, white 90%)",
          maskImage: "radial-gradient(circle at 90% 100%, transparent 10%, white 25%)",
          // zIndex: -1
        }} */}
      {/* > */}
      <section className="bg-black text-white  xl:h-screen">
        <div className=" flex flex-col md:flex-col items-center w-full  h-screen align-middle justify-between">
          <NavBar />

          <div className='md:flex md:flex-row justify-between bg-black w-full md:p-19'>
          {/* Left Side Content */}
            <div className="md:w-1/2 text-center md:text-left bg-black">
            
              <div className='items-center text-center justify-center flex flex-col gap-5 mt-10'>
                <h4 className="text-green-400 font-bold uppercase ">Rabbit Cash On Delivery</h4>
                <h1 className="text-4xl md:text-5xl font-extrabold mt-4 xl:mb-10">
                  Upfront Payment On <br />
                  <span className="text-gray-300">Cash On Delivery Orders.</span>
                </h1>
                <p className="text-white mb-40 w-[50%]">
                  Get your COD payments upfront and scale your business with PostEx—
                  no more waiting for weeks!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row mt-8 space-y-6 sm:space-y-0 sm:space-x-12">
                <div>
                  <h2 className="text-green-400 text-3xl font-bold">25,000+</h2>
                  <p className="text-gray-400">Happy & Growing Partners</p>
                </div>
                <div>
                  <h2 className="text-green-400 text-3xl font-bold">600+</h2>
                  <p className="text-gray-400">Destinations</p>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
                  Contact Sales
                </button>
              </div>

            </div>

            {/* Right Side: Map Image */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center bg-black">
              <img
                src="/mnt/data/image.png" // Replace with the correct image path
                alt="Map Representation"
                className="w-full max-w-md md:max-w-lg"
              />
            </div>
          </div>
        </div>

      </section>
      {/* </div> */}
    </>
  )
}

export default COD

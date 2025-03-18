import React from 'react'

import NavBar from './../Components/NavBar'
import Count from './../Components/Counter'
import Cursor from './../Components/CursorSplash'
import Scroll from './../Components/ScrollCod'
import CardOfCod from '../Components/CardOfCod'
import AvailableIntegration from './../Components/AvailableIntegration'
import InfiniteScroll from './../Components/InfiniteIntegrationMenu'
import StatsCard from '../Components/StatsCard'
import { PieChartComponent, LineChartComponent } from './../Components/Charts'
import Footer from './Footer'
import pakistan from './../../../../../pakistan.jpg'

import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

import brandLogo1 from './../assets/Home/Partners/brandLogo1.png'
import brandLogo2 from './../assets/Home/Partners/brandLogo2.png'
import brandLogo3 from './../assets/Home/Partners/brandLogo3.png'
import brandLogo4 from './../assets/Home/Partners/brandLogo4.png'
import brandLogo5 from './../assets/Home/Partners/brandLogo5.png'

const COD = () => {
  const items = [
    { image: 'https://picsum.photos/300/300?grayscale', link: 'https://google.com/', title: 'Screen 1' },
    { image: 'https://picsum.photos/400/400?grayscale', link: 'https://google.com/', title: 'Screen 2' },
    { image: 'https://picsum.photos/500/500?grayscale', link: 'https://google.com/', title: 'Screen 3' },
    { image: 'https://picsum.photos/600/600?grayscale', link: 'https://google.com/', title: 'Screen 4' }
  ];
  const features = [
    { icon: "🚚", title: "Same Day Delivery", description: "Experience fast and reliable service with Same Day Delivery, ensuring happy customers and seamless operations.", },
    { icon: "📍", title: "Nationwide Coverage", description: "We cover the entire country, ensuring your items reach their destination hassle-free.", },
    { icon: "💲", title: "Flexible Pricing", description: "Adjust costs to fit your budget with customizable options and personalized payment plans.", },
    { icon: "⚙️", title: "Easy Integration", description: "Instantly integrate our user-friendly APIs with any e-commerce platform for a hassle-free setup.", },
  ];maruga


  return (
    <>
      {/* <Cursor/> */}
      <section className="bg-black text-white  xl:h-screen">
        <div className=" flex flex-col items-center w-full  h-screen align-middle justify-between ">
          <NavBar />

          <div className='md:flex md:flex-row justify-between bg-radial-[at_16%_26%] from-[#452811] to-30% w-full md:p-19'>
            {/* Left Side Content */}
            <div className="md:w-1/2 text-center md:text-left">

              <div className='items-center text-center justify-center flex flex-col gap-5 mt-10'>
                <h4 className="text-[#fe971e] font-bold uppercase ">Rabbit Cash On Delivery</h4>
                <h1 className="text-4xl md:text-5xl font-extrabold mt-4 xl:mb-10">
                  Upfront Payment On <br />
                  <span className="text-gray-300">Cash On Delivery Orders.</span>
                </h1>
                <p className="text-white mb-40 w-[50%]">
                  Get your COD payments upfront and scale your business with PostEx—
                  no more waiting for weeks!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row mt-8 space-y-6 sm:space-y-0 sm:space-x-12 bg-black">

                <div className='flex gap-15 bg-black'>
                  <div>
                    <h2 className="text-[#fe971e] text-3xl font-bold">
                      <Count
                        from={0}
                        to={25000}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />+
                    </h2>
                    <p className="text-gray-400">Happy & Growing Partners</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-30 w-5' >
                    <line x1="10" y1="0" x2="10" y2="200" stroke="white" strokeWidth="1" />
                  </svg>
                  <div>
                    <h2 className="text-[#fe971e] text-3xl font-bold"><Count
                      from={0}
                      to={600}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />+

                    </h2>
                    <p className="text-gray-400">Destinations</p>
                  </div>
                </div>

                <div className='bg-black'>
                  <button className="bg-[#fe971e] hover:bg-[#cc6600] cursor-pointer text-white font-semibold px-6 py-3 rounded-full shadow-lg">
                    Contact Sales
                  </button>
                </div>
              </div>


            </div>

            {/* Right Side: Map Image */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center bg-black">
              <img
                src={pakistan} // Replace with the correct image path
                alt="Map Representation"
                className="w-full max-w-md md:max-w-lg"
              />
            </div>
          </div>
        </div>

      </section>
      <div className='p-20 h-[900px] xl:w-full relative bg-black text-white items-center'>

        <Scroll items={items} />
      </div>


      <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-6">
        <h2 className="text-sm text-[#fe971e] font-semibold">FEATURES</h2>
        <h1 className="text-3xl font-bold text-center mb-8">
          State of the Art Logistics Solution
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {features.map((feature, index) => (
            <CardOfCod key={index} {...feature} />
          ))}
        </div>
      </div>

      <div className=' w-screen overflow-hidden lg:w-[99.9%] bg-black'>
        <Marquee className='w-screen' pauseOnHover gradient gradientColor='black'>
          
          <svg xmlns="http://www.w3.org/2000/svg" className='relative top-0 right-0 h-30 w-5' >
            <line x1="10" y1="0" x2="10" y2="200" stroke="#fe971e" strokeWidth="4" />
          </svg>
          <div className='mr-15 ml-15 '>
            <img src={brandLogo1} />
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" className='relative top-0 right-0 h-30 w-5' >
            <line x1="10" y1="0" x2="10" y2="200" stroke="#fe971e" strokeWidth="4" />
          </svg>
          <div className='mr-15 ml-15 '>
            <img src={brandLogo2} />
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" className='relative top-0 right-0 h-30 w-5' >
            <line x1="10" y1="0" x2="10" y2="200" stroke="#fe971e" strokeWidth="4" />
          </svg>
          <div className='mr-15 ml-15 '>
            <img src={brandLogo3} />
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" className='relative top-0 right-0 h-30 w-5' >
            <line x1="10" y1="0" x2="10" y2="200" stroke="#fe971e" strokeWidth="4" />
          </svg>
          <div className='mr-15 ml-15'>
            <img src={brandLogo4} />
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" className='relative top-0 right-0 h-30 w-5' >
            <line x1="10" y1="0" x2="10" y2="200" stroke="#fe971e" strokeWidth="4" />
          </svg>
          <div className='mr-15 ml-15'>
            <img src={brandLogo5} />
          </div>

        </Marquee>
      </div>


      <section className='h-contain bg-black'>
        <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-6">

          <h2 className="text-3xl font-bold text-center">
            Why <span className="text-[#fe971e]">RABBIT.</span>
          </h2>

          <div>
            <div className='flex flex-col xl:flex-row'>

              <div className="w-full max-w-5xl m-10 justify-center align-middle xl:mt-[15%]">
                {/* Stats Section */}
                <div className="flex flex-col ">
                  <StatsCard value="PKR 25B+" description="Value of upfront payments made" />
                  <StatsCard value="25,000+" description="Happy & Growing merchants" />
                  <StatsCard value="92%" description="Delivery Success Rate" />
                </div>
              </div>

              <motion.div className='flex flex-col xl:flex-row '
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}

              >
                {/* Pie Chart */}
                <PieChartComponent />

                {/* Line Chart */}
                <div className='xl:w-90%'>
                  <LineChartComponent />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default COD

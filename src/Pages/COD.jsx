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
  ];

  const integrationItems = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/600/600?grayscale',
    'https://picsum.photos/400/400?grayscale'
  ];

  const infiniteItems = [
    { content: "APPLE" },
    { content: <p>AMAZON</p> },
    { content: "SAMSUNG" },
    { content: <p>ReactJs</p> },
    { content: "TailwindCss" },
    { content: <p>Paragraph Item 6</p> },
    { content: "Text Item 7" },
    { content: <p>Paragraph Item 8</p> },
    { content: "Text Item 9" },
    { content: <p>Paragraph Item 10</p> },
    { content: "Text Item 11" },
    { content: <p>Paragraph Item 12</p> },
    { content: "Text Item 13" },
    { content: <p>Paragraph Item 14</p> },
  ];



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

              <div className="flex flex-col sm:flex-row mt-8 space-y-6 sm:space-y-0 sm:space-x-12">

                <div className='flex gap-15'>
                  <div c>
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

              </div>

              <div className="m-8">
                <button className="bg-[#fe971e] hover:bg-[#cc6600] cursor-pointer text-white font-semibold px-6 py-3 rounded-full shadow-lg">
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
      <div className='p-20 h-[900px] xl:w-full relative bg-black text-white items-center mt-50 '>

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

      <div style={{ height: '500px', position: 'relative' }}>
        <InfiniteScroll
          items={infiniteItems}
          isTilted={true}
          tiltDirection='left'
          autoplay={true}
          autoplaySpeed={2}
          autoplayDirection="down"
          pauseOnHover={false}
        />
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

              <div className='flex flex-col xl:flex-row '>
                {/* Pie Chart */}
                <PieChartComponent />

                {/* Line Chart */}
                <LineChartComponent />
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default COD

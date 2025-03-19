import React from 'react'
import ManageEverything from '../Components/ManageEverything'
import Marquee from 'react-fast-marquee'

import brandLogo1 from './../assets/Home/Partners/brandLogo1.png'
import brandLogo2 from './../assets/Home/Partners/brandLogo2.png'
import brandLogo3 from './../assets/Home/Partners/brandLogo3.png'
import brandLogo4 from './../assets/Home/Partners/brandLogo4.png'
import brandLogo5 from './../assets/Home/Partners/brandLogo5.png'

function Partners() {
  return (
    <div className=" max-w-screen text-white h-fit">
      {/* Partners Section */}
      <div className="pt-10 text-center text-5xl font-extrabold font-serif lg:w-[96%] bg-gradient-to-l from-black to-yellow-900 mb-6 h-30">
        Our <span className="text-[#fe971e]">Partners</span>
      </div>

      <div className=' w-screen overflow-hidden lg:w-[95%] h-fit'>
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
      <div >
        <ManageEverything />
      </div>
    </div>
  );
}

export default Partners

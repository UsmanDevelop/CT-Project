import React from 'react'
import ManageEverything from '../Components/ManageEverything'
import Marquee from 'react-fast-marquee'
import brandLogo1 from './../assets/brandLogo1.png'
import brandLogo2 from './../assets/brandLogo2.png'
import brandLogo3 from './../assets/brandLogo3.png'
import brandLogo4 from './../assets/brandLogo4.png'
import brandLogo5 from './../assets/brandLogo5.png'

function Partners() {
  return (
    <div className="bg-black text-white h-contain">
      {/* Partners Section */}
      <div className="pt-10 text-center text-5xl font-extrabold font-serif bg-gradient-to-l from-black to-yellow-900 mb-6 w-full h-30 bg-amber-200">
        Our <span className="text-[#fe971e]">Partners</span>
      </div>

      <div className='max-w-screen overflow-hidden'>
        <Marquee className='min-w-full' pauseOnHover gradient gradientColor='black' gradientWidth={250}>
          
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
      <ManageEverything/>
    </div>
  );
}

export default Partners

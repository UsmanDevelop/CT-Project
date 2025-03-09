import React, {useEffect, useRef} from 'react'
import Typed from 'typed.js';
// import mobileMockup from './../assets/mobileomockup.png'
import mobileMockup from './../assets/herostuff.png'

function home() {
  const el = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Growth CAL', 'RABBIT', 'Secure Delivery'],
      typeSpeed: 90,
      // smartBackspace: true,
      backSpeed: 90,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  });
  return (
    <>
    <div className="text-white w-full h-fit px-12 bg-radial-[at_90%_80%] from-[#fe971e] to-15%"
      style={{
      WebkitMaskImage: "radial-gradient(circle at 90% 90%, transparent 90%, white 90%)",
      maskImage: "radial-gradient(circle at 90% 100%, transparent 10%, white 25%)",
      // zIndex: -1
    }}
    >
      <div className='h-full w-[96.8%] bg-radial-[at_90%_12%] from-[#48310f] to-30% absolute '></div>
      <div className="w-full h-full flex flex-col items-center align-bottom justify-center bg-radial-[at_20%_18%] from-[#1a0f06] to-20% md:flex-row md:justify-evenly ">
       
      <div className='mt-20 md:mt-0 z-20'>

        <h1 className="text-4xl font-bold">
          Get Instant Access <br />
          To <span className="text-[#fe971e]"><span ref={el} /></span>
        </h1>
        <p className="text-gray-400 mt-4">
          Register Yourself by filling the required info on the form. <br />
          Our team will contact you within 48 hours.
        </p>
        <button className="mt-6 border border-[#fe971e] cursor-pointer font-bold text-[#fe971e] px-6 py-2 rounded-lg hover:bg-[#fe971e] hover:text-black transition">
          Get Started
        </button>
      </div>
      
      <div>
        <img src={mobileMockup} className='z-10 h-80 md:h-160 drop-shadow-[0_5px_5px_rgba(255,165,0,0.6)]'/>
      </div>


      </div>
    </div>
    </>
  )
}

export default home

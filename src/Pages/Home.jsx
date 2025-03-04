import React, {useEffect, useRef} from 'react'
import Typed from 'typed.js';

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
    <div className="bg-black text-white h-screen flex flex-row items-center px-12">
      <div className="max-w-lg">
      
      <div>

        <h1 className="text-4xl font-bold">
          Get Instant Access <br />
          To <span className="text-orange-500"><span ref={el} /></span>
        </h1>
        <p className="text-gray-400 mt-4">
          Register Yourself by filling the required info on the form. <br />
          Our team will contact you within 48 hours.
        </p>
        <button className="mt-6 border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition">
          Get Started
        </button>
      </div>
      
      <div>
        THIS IS THE IMAGE SECTION
      </div>
      </div>
    </div>
  )
}

export default home

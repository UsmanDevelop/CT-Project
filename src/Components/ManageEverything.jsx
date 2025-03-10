import React from 'react'

import mobilemockup from './../assets/mobilemockup.png'
import rateRider from './../assets/raterider.png'
import manageOrder from './../assets/manaeorders.png'
import support from './../assets/support.png'
import trackPayment from './../assets/trackorders.png'
import trackShipment from './../assets/trackshipments.png'
import bookAppointment from './../assets/bookshipments.png'


function ManageEverything() {
  
  const cards = [
    { title: "Rate the Rider", description: "Give feedback to improve service quality.", icon: "⭐", position: "top-[-750px] left-[-250px]" },
    { title: "Support", description: "Get 24/7 assistance whenever you need it.", icon: "💬", position: "right-[20%]" },
    { title: "Track Shipments", description: "Real-time tracking for all your deliveries.", icon: "📦", position: "left-[10%] " },
    { title: "Manage Orders", description: "Keep track of all past & current shipments.", icon: "📋", position: "right-[10%]" },
    { title: "Book Your Shipment", description: "Schedule pickups & manage shipments easily.", icon: "🚚", position: "left-[10%] bottom-[10%]" },
    { title: "Track Your Payments", description: "View completed & pending payments.", icon: "💰", position: "right-[10%] bottom-[10%]" },
  ];
  
  return (
    <>
    <div className='w-contain flex flex-col align-bottom justify-center items-center'>
    
    <div className="pt-10 text-center text-5xl items-center font-extrabold font-serif mb-6 w-contain  h-30 ">
        Manage Everything in <span className="text-[#fe971e]">One Place!</span>
    </div>
    <div className='items-center'>
      <img className='h-200 w-200' src={mobilemockup}/>
    </div>



        
        {/* Floating Cards */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative bg-[#1a1a1a] shadow-lg p-4 rounded-lg w-56 md:w-64 lg:w-72 flex items-center gap-3 ${card.position} transition-all`}
          >
            {/* Icon Placeholder (Replace with actual icons/images if needed) */}
            <div className="text-orange-500 text-3xl">{card.icon}</div>
            <div>
              <h3 className="font-bold text-white text-sm md:text-lg">{card.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm">{card.description}</p>
            </div>
          </div>
        ))}






    
    </div>
    </>
  )
}

export default ManageEverything

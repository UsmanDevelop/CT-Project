import React from 'react'

import mobilemockup from './../assets/Home/ManageEverything/mobilemockup.png'
import rateRider from './../assets/Home/ManageEverythingraterider.png'
import manageOrder from './../assets/Home/ManageEverythingmanageorders.png'
import support from './../assets/Home/ManageEverythingsupport.png'
import trackPayment from './../assets/Home/ManageEverythingtrackorders.png'
import trackShipment from './../assets/Home/ManageEverythingtrackshipments.png'
import bookAppointment from './../assets/Home/ManageEverythingbookshipments.png'


function ManageEverything() {
  
  const cards = [
    { title: "Rate the Rider", description: "Give feedback to improve service quality.", icon: rateRider, position: "top-[-67rem] left-[-2rem] lg:left-[-15rem] md:left-[-15rem]" },
    { title: "Support", description: "Get 24/7 assistance whenever you need it.", icon: support, position: "top-[-66rem] right-[-2rem] lg:right-[-25rem] md:right-[-15rem]" },
    { title: "Track Shipments", description: "Real-time tracking for all your deliveries.", icon: trackShipment, position: "top-[-65rem] left-[-2rem] lg:left-[-30rem] md:left-[-10rem] " },
    { title: "Manage Orders", description: "Keep track of all past & current shipments.", icon: manageOrder, position: "top-[-64rem] right-[-2rem] lg:right-[-15rem] md:right-[-10rem] md:top-[-67rem]" },
    { title: "Book Your Shipment", description: "Schedule pickups & manage shipments easily.", icon: bookAppointment, position: "top-[-63rem] left-[-2rem] lg:left-[-15rem] md:left-[-15rem]" },
    { title: "Track Your Payments", description: "View completed & pending payments.", icon: trackPayment, position: "top-[-62rem] right-[-2rem] lg:right-[-25rem] md:right-[-15rem] md:top-[-70rem]" },
  ];
  
  return (
    <>
    <div className=' w-full h-full pt-250 flex flex-col align-bottom justify-center items-center h-contain'>
    
    <div className="text-center text-5xl items-center font-extrabold font-serif mb-6 w-contain h-30 ">
        Manage Everything in <span className="text-[#fe971e]">One Place!</span>
    </div>
    <div className='items-center h-'>
      <img className='h-300 w-250' src={mobilemockup}/>
    </div>
       
        {/* Floating Cards */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative bg-[#241c0f] shadow-lg p-4 rounded-lg w-66 md:w-64 lg:w-92 flex items-center gap-3 ${card.position} transition-all`}
          >

            {/* Icon Placeholder (Replace with actual icons/images if needed) */}
            <img src={card.icon} alt={card.title} className="h-66 w-66 m-[-90px]" />
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

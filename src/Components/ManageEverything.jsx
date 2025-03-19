import React from 'react'

import mobilemockup from './../assets/Home/ManageEverything/mobilemockup.png'
import rateRider from './../assets/Home/ManageEverything/raterider.png'
import manageOrder from './../assets/Home/ManageEverything/manageorders.png'
import support from './../assets/Home/ManageEverything/support.png'
import trackPayment from './../assets/Home/ManageEverything/trackorders.png'
import trackShipment from './../assets/Home/ManageEverything/trackshipments.png'
import bookAppointment from './../assets/Home/ManageEverything/bookshipments.png'


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
      <div className=' w-full flex flex-col align-bottom justify-center items-center h-[90%]'>

        <div className="text-center text-5xl items-center font-extrabold font-serif w-contain h-30 ">
          Manage Everything in <span className="text-[#fe971e]">One Place!</span>
        </div>
        <div className='items-center relative '>
          <img className='w-150' src={mobilemockup} />
        </div>

        {/* Floating Cards */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative bg-[#241c0f] shadow-lg p-4 rounded-lg w-66 md:w-64 lg:w-92 flex items-center ${card.position} transition-all`}
          >
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

import React from 'react'
import mobilemockup from './../assets/mobilemockup.png'

function ManageEverything() {
  return (
    <>
    <div className='w-contain flex flex-col align-bottom justify-center items-center'>

    <div className="pt-10 text-center text-5xl items-center font-extrabold font-serif mb-6 w-contain  h-30 ">
        Manage Everything in <span className="text-[#fe971e]">One Place!</span>
    </div>
    <div className='items-center'>
      <img className='h-200 w-200' src={mobilemockup}/>
    </div>

    
    </div>
    </>
  )
}

export default ManageEverything

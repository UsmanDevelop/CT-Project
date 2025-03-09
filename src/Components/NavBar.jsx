import React from 'react'


function NavBar() {
    return (
        <>
        <nav className="shadow-md shadow-yellow-950 opacity-95 rounded-2xl w-full bg-gradient-to-r from-gray-950 to-yellow-900 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold italic">
        RABBIT<span className="text-[#fe971e]">.</span>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-[#fe971e]">COD</a>
        <a href="#" className="hover:text-[#fe971e]">Business Suite</a>
        <a href="#" className="hover:text-[#fe971e]">Financing</a>
        <a href="#" className="hover:text-[#fe971e] flex items-center">
          Track Order <span className="ml-1">🚚</span>
        </a>
      </div>
      <div className="space-x-4">
        <button className="border-2 cursor-pointer border-[#fe971e] text-[#fe971e] px-4 py-1 rounded-2xl hover:bg-[#fe971e] hover:text-white transition">
          Login
        </button>
        <button className="border-2 cursor-pointer border-[#fe971e] bg-[#fe971e] px-4 py-1 rounded-2xl text-black font-semibold hover:bg-orange-600 hover:border-orange-600 transition">
          Signup
        </button>
      </div>
    </nav>
        </>
      )
}

export default NavBar

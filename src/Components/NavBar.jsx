import React from 'react'


function NavBar() {
    return (
        <>
        <nav className="shadow-xl shadow-yellow-950 opacity-95 rounded-2xl w-full bg-gradient-to-r from-gray-950 to-yellow-900 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold italic">
        RABBIT<span className="text-orange-500">.</span>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-orange-500">COD</a>
        <a href="#" className="hover:text-orange-500">Business Suite</a>
        <a href="#" className="hover:text-orange-500">Financing</a>
        <a href="#" className="hover:text-orange-500 flex items-center">
          Track Order <span className="ml-1">🚚</span>
        </a>
      </div>
      <div className="space-x-4">
        <button className="border-2 cursor-pointer border-orange-500 text-orange-500 px-4 py-1 rounded-2xl hover:bg-orange-500 hover:text-white transition">
          Login
        </button>
        <button className="border-2 cursor-pointer border-orange-500 bg-orange-500 px-4 py-1 rounded-2xl text-black font-semibold hover:bg-orange-600 hover:border-orange-600 transition">
          Signup
        </button>
      </div>
    </nav>
        </>
      )
}

export default NavBar

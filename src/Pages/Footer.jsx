import React from 'react'
import { NavLink } from "react-router-dom";
import { FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaLinkedin
 } from "react-icons/fa";
 import { IoLocationSharp } from "react-icons/io5";
 import { FaPhoneVolume } from "react-icons/fa6";
 import { TfiEmail } from "react-icons/tfi";
//  import mail from "../assets/mail.svg"
 import { ImMail } from "react-icons/im";
 import { BsFillEnvelopeFill } from "react-icons/bs";
 import { GiRotaryPhone } from "react-icons/gi";

function Footer() {
  return (
    <footer className="bg-[#140e09] text-gray-300 text-sm w-full mt-100">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:pl-56">
        
        <div className='flex justify-center align-bottom flex-col'>
          <svg width='100px' height='100px' className='border-2 border-amber-50'>

          </svg>
          <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
          <div className="flex space-x-3 mb-4">
            <NavLink className="text-2xl text-blue-400 hover:text-orange-400"><FaTwitter/></NavLink>
            <NavLink className="text-2xl text-[#5851db] hover:text-orange-400"><FaInstagram/></NavLink>
            <NavLink className="text-2xl text-blue-600 hover:text-orange-400"><FaFacebook /></NavLink>
            <NavLink className="text-2xl text-red-500 hover:text-orange-400"><FaYoutube /></NavLink>
            <NavLink className="text-2xl text-blue-700 hover:text-orange-400"><FaLinkedin/></NavLink>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Our Store</h3>
          <ul className="space-y-2 text-gray-400">
            <li><NavLink to='' className="hover:text-orange-400">Home</NavLink></li>
            <li><NavLink to='' className="hover:text-orange-400">About</NavLink></li>
            <li><NavLink to='' className="hover:text-orange-400">Service</NavLink></li>
            <li><NavLink to='' className="hover:text-orange-400">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Get In Touch</h3>
          <p className="text-gray-400 mt-5"><IoLocationSharp className='inline text-orange-400 text-2xl mr-5'/>Location</p>
          <p className="text-gray-400 mt-5"><GiRotaryPhone className='inline text-orange-400 text-2xl mr-5'/>Call</p>
          <p className="text-gray-400 mt-5"><FaPhoneVolume className='inline text-orange-400 text-2xl mr-5'/>Phone</p>
          <p className="text-gray-400 mt-5"><BsFillEnvelopeFill className='inline text-orange-400 text-2xl mr-5'/>Mail</p>
        </div>

      </div>

      <div className="bg-gray-800 text-center py-4">
        <p className="text-xs text-gray-400 mt-4">
          Copyright &#169; {new Date().getFullYear()} Muhammad Usman Malik | All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer

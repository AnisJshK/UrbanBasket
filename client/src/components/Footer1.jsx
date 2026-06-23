import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer1 = () => {
  return (
   <div className="w-full">
  <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm items-start">
    
    <div>
      <img src={assets.logo} className="mb-1 w-25" alt="" />
      <p className="w-full md:w-2/3 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit...
      </p>
    </div>

    <div className="justify-self-center">
      <p className="text-xl font-medium mb-5">COMPANY</p>
      <ul className="flex flex-col gap-1 text-gray-600">
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div className="justify-self-center">
      <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
      <ul className="flex flex-col gap-1 text-gray-600">
        <li>+91 1234567890</li>
        <li>contact@example.com</li>
      </ul>
    </div>


  </div>
    <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026@ UrbanBasket.com - All rights reserved </p>
    </div>
</div>
  )
}

export default Footer1
import React from 'react'
import nexcent from '../assets/Logo.svg'
const Navbar = () => {
  return (
    <div className='flex h-84 max-w-screen-2xl justify-around border-solid  bg-slate-100 '>
    <div className='mt-2.5'><img src={nexcent} alt="logo" /></div>

    <div className='flex gap-12 mt-2.5'>
        <a href="Home">Home</a>
        <a href="Service">Service</a>
        <a href="Feature">Feature</a>
        <a href="Product">Product</a>
        <a href="Testimonial">Testimonial</a>
        <a href="FAQ">FAQ</a>
    </div>

    <div className='flex h-10 w-13 mt-2.5'>
        <button className='pt-2.2 pr-5 pb-2.5 pl-5 rounded-md text-green-500'>Login</button>
        <button className='pt-2.2 pr-5 pb-2.5 pl-5 bg-green-500 rounded-md text-white'>Signup</button>
    </div>
    
    </div>
  )
}

export default Navbar
import React from 'react'
import whitelogo from '../assets/whitelogo.svg'
import SocialLinks from '../assets/Social Links.svg'
import col3 from '../assets/col3.svg'

const Footer = () => {
  return (
    <>
    <div className='max-w-screen-2xl h-75 pt-8 pr-0 pb-8 pl-0'>
        
        <div className='text-6xl w-222 h-38 text-ceter semi-bold'>Pellentesque suscipit <br /> fringilla libero eu.</div>
        <button className='bg-green-500 text-white pt-3.5 pr-8 pb-3.5 pl-8 mt-10'>Get a Demo</button>
        
    </div>



   <div className='bg-slate-900 max-w-screen-2xl  h-82 flex justify-around pt-8 pr-41 pb-8 pl-41'>

  <div className='flex flex-col gap-10 text-left'>
  <img src={whitelogo} alt="" />
  <p className='text-white'>Copyright © 2020 Nexcent ltd.</p>
  <p className='text-white'>All rights reserved</p>
  <img src={SocialLinks} alt="links" />
  </div>


  <div className='flex flex-col gap-6 text-white text-left'>
    <h3 className='text-2xl'>Contact</h3>
    <div>About us</div>
    <div>Blog</div>
    <div>Contact us</div>
    <div>Pricing</div>
    <div>Testimonials</div>
  </div>

  <div className='flex flex-col gap-6 text-white text-left'>
    <h3 className='text-2xl'>Support</h3>
    <div>Help Center</div>
    <div>Terms of service</div>
    <div>Legal</div>
    <div>Privacy Policy</div>
    <div>Status</div>
  </div>

  <div>
    <img src={col3} alt="" />
  </div>




   </div>


    </>
  )
}

export default Footer
import React from 'react'
import counts from '../assets/Counts.svg'
import unlock from'../assets/Unlock.svg'
import  tesla  from'../assets/tesla.svg'
import  Frame14  from '../assets/Frame14.svg'
const Help = () => {
  return (
    <>
    
    <div className='h-72 max-w-screen-2xl flex justify-around  gap-5 pt-16 pr-30 pb-16 pl-16'>
        <div className='h-30 w-135'>
            <div className='text-4xl text-left'>
            Helping a local <br />
            <span className='text-green-500 text-4xl'> business reinvent itself</span>
             </div>
             <div className='h-6 w-135 text-base'>
             We reached here with our hard work and dedication
             </div>
        </div>
        <div>
            <img src={counts} alt="" />
        </div>
    </div>

    <div className='flex justify-between'>

  <img src={unlock} alt="unlock" />


<div className='text-left pt-0 pb-0 pr-36 pl-36'>
 <p className='w-150 h-22 text-4xl semi-bold my-5'>How to design your site footer like <br /> we did</p>
<p className='w-150 my-5'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
<button className='my-10 h-15 w-22 bg-green-500 pt-3.5 pr-8 pb-3.5 pl-8 text-white'>Learn More</button>
</div>
</div>

<div className='flex  justify-between bg-slate-100 pt-5'>
    <img src={tesla} alt="tesla" />
    <div className='text-left w-187 pl-10'>
 Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
   
    <p className='my-5 text-green-500'>Tim Smith</p>
    <p className='my-5'>British Dragon Boat Racing Association</p>
    <img className='my-5' src={Frame14} alt="" />
</div>
</div>


    </>
  )
}

export default Help
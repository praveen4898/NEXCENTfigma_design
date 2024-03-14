import React from 'react'
import illustration from '../assets/Illustration.svg'
const Lessons = () => {
  return (

    <div className=' flex max-w-screen-2xl h-38 pt-24 pr-36 pb-24 pl-36 bg-slate-100'>

<div className='w-160 h-69 text-left gap-2.5'>
    <div className='text-6xl font-semibold'>Lessons and insights
       <span className='text-green-500'> from 8 years</span>
    </div>
    <div className='text-base my-2.5'>Where to grow your business as a photographer: site or social media?</div>
    <button className='bg-green-500 text-white pt-3.5 pr-8 pb-3.5 pl-8 rounded-t'>Register</button>
</div>

<div>
<img src={illustration} alt="illustration" />

</div>




    </div>
  )
}

export default Lessons
import React from 'react'
import frame from'../assets/Frame 35.svg'
const Unseen = () => {
  return (
    <>
    
    <div className='flex  gap-10 pt-0 pb-0 pr-36 pl-36 w-160 h-108  justify-between '>
    
        <img   className='w-120' src={frame} alt="frame" />

        <div className='flex flex-col w-165 text-left  gap-y-8 mt-8 '>
        <div className='w-160 text-4xl semi-bold'>The unseen of spending three years at Pixelgrade</div>
        <div className='w-160 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</div>
        <div><button className='pt-3.5 pr-7 pb-3.5 pl-7 bg-green-500 text-white'>Learn More</button></div>
    </div>
  
</div>

</>
  )
}

export default Unseen
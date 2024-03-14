import React from 'react'
import clientlogo from'../assets/Clients Logos.svg'
import membership from'../assets/membership.svg'
import clubs from'../assets/clubs.svg'
import association from'../assets/association.svg'

const Clients = () => {
  return (
    <>
    
    <div className='h-47 max-w-screen-2xl mt-10'>
        <div className='w-277 h-11 text-4xl font-semibold'>Our Clients</div>
        <div className='w-277 h-6 text-gray-500'>We have been working with some Fortune 500+ clients</div>
        <div className='w-286 h-24'>
            <img src={clientlogo} alt="clientlogos" />
        </div>
    </div>
    <div>
        <div className='w-135 h-22 text-4xl font-semibold mt-2.5'>Manage your entire community <br /> in a single system</div>
        <div className='h-6 mt-2'>Who is Nextcent suitable for?</div>
    </div>


    <div className=' flex h-70 max-w-screen-2xl mt-10 gap-10'>

  <div className='h-65 w-74 shadow-md px-6 py-6 mt-2.5'>
    <div className='h-36 w-73 flex flex-col items-center justify-center'>
    <img src={membership} alt="" />

     <h4 className='text-3xl font-bold'>Membership <br /> Organisations</h4> 
    </div>
    <div>Our membership management software provides full automation of membership renewals and payments</div>
  </div>

  <div className='h-65 w-74 shadow-md px-6 py-6'>
    <div className='h-36 w-73 flex flex-col items-center justify-center'>
    <img src={association} alt="" />
    <h4 className='text-3xl font-bold'>National <br /> Associations </h4> 
    </div>

  <div>Our membership management software provides full automation of membership renewals and payments</div>
  
  </div>


  <div className='h-65 w-74 shadow-md px-6 py-6'>
  <div className='h-36 w-73 flex flex-col items-center justify-center'>
    <img src={clubs} alt="clubs" className='mb-2' />
    <h4 className='text-3xl text-center font-bold'>Clubs And<br /> groups </h4> 
  </div>
    <div>Our membership management software provides full automation of membership renewals and payments</div>
  </div>

    </div>
    </>
    
  )
}

export default Clients
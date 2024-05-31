import React from 'react'

const ArchitectureCard = () => {
  return (
     <>
     <section>
     <h1 className='text-center md:text-left font-bold text-3xl p-3 my-4'>Architecture</h1>
      <div className="flex m-2 sm:f">
        <span className="overflow-hidden inline-block">
          <img src="https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[59rem] h-[28rem] mx-2 hover:scale-110 duration-300 transition-all ease-in-out'/>
        </span>
        <span className="hidden w-[30rem] h-[28rem] bg-gray-600 md:block rounded-md rid place-content-center text-white text-center p-8 text-2xl">From the very beginning our practice was founded on a philosophy of innovation, sustainability and design. We</span>
      </div>
     </section>
     </>
  )
}

export default ArchitectureCard
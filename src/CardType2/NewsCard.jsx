import React from 'react'

const NewsCard = () => {
  return (
    <>
      <section>
      <h1 className='text-center md:text-left font-bold text-3xl p-2 my-4'>News</h1>
        <div className="flex m-2">
          <span className="grid col-span-2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[59rem] h-[28rem] mx-2 hover:scale-110 duration-300 transition-all ease-in-out' />
          </span>
          <span className="hidden md:block w-[30rem] h-[28rem] bg-gray-600 m-auto place-content-center text-center">
             <div className="my-2">
             <h2 className='my-4'>Stay up to date with the latest Foster + Partners projects and news.</h2>
            <form action="">
              <input className="bg-gray-700 p-2 rounded-3xl text-center m-auto text-white" type="email" name="" id="" placeholder="Email address.." />
            </form>
            <button className='bg-gray-700 p-2 rounded-3xl text-center m-auto text-white my-4 w-60 '>Subscribe</button>
             </div>
          </span>
        </div>
      </section>
    </>
  )
}

export default NewsCard
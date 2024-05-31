import React, {useEffect, useState } from 'react'

const Shortcut = ({ id, img, name }) => {

  const [scrolled, setScrolled] = useState(false)


  useEffect(() => { 
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

   
  }, []);

  return (
    <>
      <div className={`w-[30rem] h-[24rem] m-auto relative overflow-hidden inline-block transition-transform ${scrolled ? "translate-y-0" : "translate-y-full"}`} key={id}>
        <img src={img} alt="" className='  w-[30rem] h-[24rem] bg-black hover:scale-110 duration-300 transition-all' />
        <span className="name text-2xl text-pretty absolute bottom-2 left-2 w-screen text-shadow-2xl ">{name}</span>
        <div className="absolute bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-lg "></div>
      </div>
    </>
  )
}

export default Shortcut
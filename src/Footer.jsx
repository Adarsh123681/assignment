import React , {useState} from 'react'
import { FaArrowUp, FaInstagram, FaLinkedin, FaPinterest, FaPlus, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  const list = [
    "Project", "Expertise", "Studio", "News", "Careers", "Contact"
  ]
  const icons = [
    <FaLinkedin />, <FaInstagram />, <FaPinterest />, <FaYoutube />
  ]
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <> 
    <div className="mt-4"></div>
    <hr className='w-[40rem] m-auto overflow-hidden md:w-[80rem]'/>
      <section className='container w-[100vw] h- fit text-white relative mt-4'>
        <div className="flex">
          <span className="name text-3xl flex my-6 ml-5 font-bold">Foster<FaPlus className='m-1' /> Partners</span>
          {
            showButton && (
              <div className="top absolute right-2 top-2"><span className='flex m-3'><FaArrowUp className='text-4xl mx-2' onClick={scrollToTop} /></span></div >
            )
          }
        </div>
        {/* list */}
        <ul className="flex mx-2">
          {
            list.map((ele) => {
              return (
                <>
                  <li className="p-3">{ele}</li>
                </>
              )
            })
          }
        </ul>

        
        {/* icons */}
        <div className="flex ml-3">
          {
            icons.map((icon) => {
              return (
                <>
                  <div className="text-2xl mx-2 mt-8 p-3 rounded-full bg-gray-700">{icon}</div>
                </>
              )
            })
          }
        </div>
        <div className="p-3 m-3">Legal and Policies</div>
        <div className="mx-2 p-3 mt-0">c 2024 Foster .All Rights Reserved</div>
      </section>
    </>
  )
}

export default Footer
import React from 'react'
import Shortcut from '../Carddiv'
import { studioDetails } from '../assets/studioDetails'
const Studio = () => {
 
  return (
    <>
      <h1 className='text-center md:text-left font-bold text-3xl p-3 my-4'>Studio</h1>
      <section className='card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2 '>
        {
          studioDetails.map((ele) => {
            const { id, name, img } = ele
            return (
              <>
                <Shortcut id={id} name={name} img={img} />
              </>
            )
          })
        }
      </section>
    </>
  )
}

export default Studio
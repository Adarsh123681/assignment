import React, { useRef, useEffect, useState } from 'react'
import Header from './Header';

const Carousel = () => {
  const items = [
    {
      id: 1,
      link: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "img"
    },
    {
      id: 2,
      link: "https://videos.pexels.com/video-files/4765224/4765224-sd_640_360_24fps.mp4",
      type: "vid"
    },
    {
      id: 3,
      link: "https://images.pexels.com/photos/3856050/pexels-photo-3856050.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "img"
    },
    {
      id: 4,
      link: "https://images.pexels.com/photos/3856050/pexels-photo-3856050.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "img"
    },
    {
      id: 5,
      link: "https://images.pexels.com/photos/3856050/pexels-photo-3856050.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "img"
    },
  ]

  const [curind, setCurind] = useState(0);
  const videoRef = useRef(null);
  const transitionTime = 5000;

  const nextItem = () => {
    setCurind((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextItem();
    }, transitionTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (items[curind].type === 'vid' && videoRef.current) {
      videoRef.current.play();
    }
  }, [curind]);

  const handleVideoEnded = () => {
    nextItem();
  };


  return (
    <>

      <div className="relative w-fit mx-auto h-[42rem]">

        <div className="overflow-hidden">
          {items.map((ele, index) => {
            const { id, link, type } = ele

            return (
              <>

                <div
                  key={id}
                  className={`transition-transform duration-500 ease-in-out transform ${index === curind ? 'translate-x-0' : 'translate-x-full'
                    }`}
                  style={{ display: index === curind ? 'block' : 'none' }}
                >
                  <Header />
                  {type === 'vid' ? (
                    <video
                    className='w-screen' 
                      ref={videoRef}
                      onEnded={handleVideoEnded}
                    >
                      <source src={link} type="video/mp4" />

                    </video>
                  ) : (
                    <img src={link} alt={`Slide ${index + 1}`} className="w-screen h-[40rem] overflow-hidden" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-lg"></div>
                  <span className="content absolute left-4 bottom-2 text-2xl p-2 w-1/2 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad aut provident soluta quidem fugit! Sit consequatur provident praesentium at vel!
                  </span>
                </div>
               
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Carousel
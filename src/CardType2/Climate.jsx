import React from "react";

const Climate = () => {
  return (
    <>
      <section>
      <h1 className='text-center md:text-left font-bold text-3xl p-4 my-4'>Climate And Sustanibility</h1>
        <div className="flex m-2">
          <span className="grid col-span-2 overflow-hidden ">
            <img
              src="https://images.unsplash.com/photo-1464039397811-476f652a343b?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-[59rem] h-[28rem] mx-2 hover:scale-110 duration-300 transition-all ease-in-out"
            />
          </span>
          <span className="col-span-1 w-[30rem] h-[28rem] bg-gray-600 content-center items-center text-white hidden md:block text-center">
          Sustainability has been a central theme of our work for more than five decades. We work closely with our clients to
          </span>
        </div>
      </section>
    </>
  );
};

export default Climate;

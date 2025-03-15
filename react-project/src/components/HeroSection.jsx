import React from 'react'
import Image from '../assets/images/tra.png'

const HeroSection = () => {
  return (
    <>
        <section id='home' className='py-5 bg-custom-image h-screen'
            style={{
                backgroundImage: "url(https://cms.accuweather.com/wp-content/uploads/2020/03/cropped-man-wearing-white-shirt-brown-shorts-and-green-backpack-672358.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginTop: '-90px',
            }}
        >
            <div className=" absolute inset-0 bg-white/20" ></div>
            
            <div className='container z-10 flex flex-wrap items-center justify-center mx-auto mt-35 md:px-12 md:flex-row'>
                <div className='mb-14 lg:mb-0 lg:w-1/2'>
                    <h1 className='max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center
                    lg:text-left lg:leading-tight mb-5'>
                        Find exciting <span className='text-[#F15D30] text-[3.2rem]'> Destinations </span> <br/> near you with ease!

                    </h1>
                    <div className='flex justify-center mt-5 lg:justify-start'>
                        <button type='button' className='text-white bg-[#f15d30] font-medium rounded-lg px-5 py-4
                        text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out'>
                            Get started
                        </button>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default HeroSection

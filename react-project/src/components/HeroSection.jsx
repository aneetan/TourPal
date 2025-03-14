import React from 'react'
import Image from '../assets/images/tra.png'

const HeroSection = () => {
  return (
    <>
        <section id='home' className='py-5 bg-[#F9FAFC] h-[calc(100vh-80px)]'>
            <div className='container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row'>
                <div className='mb-14 lg:mb-0 lg:w-1/2'>
                    <h1 className='max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center
                    lg:text-left lg:leading-tight mb-5'>
                        Find exciting <span className='text-[#F15D30] text-[3.2rem]'> Destinations </span> <br/> near you with ease!

                    </h1>
                    <p className='max-x-xl text-lg text-center text-gray-500 lg:text-left lg:max-w-md'>
                    We Guide You to Local Treasures

                    </p>
                    <div className='flex justify-center mt-5 lg:justify-start'>
                        <button type='button' className='text-white bg-[#f15d30] font-medium rounded-lg px-5 py-4
                        text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out'>
                            Get started
                        </button>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <img className='ml-auto w-full' src={Image}/>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default HeroSection

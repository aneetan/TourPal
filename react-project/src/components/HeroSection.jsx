import React from 'react'

const HeroSection = () => {
  return (
    <>
        <section id='home' className='py-5'>
            <div className='container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row'>
                <div className='mb-14 lg:mb-0 lg:w-1/2'>
                    <h1 className='max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center
                    lg:text-left lg:leading-tight mb-5'>
                        A small Business is only good as its tools.
                    </h1>
                    <p className='max-x-xl text-center text-gray-500 lg:text-left lg:max-w-md'>
                        We're different. I love you
                    </p>
                    <div className='flex justify-center mt-14 lg:justify-start'>
                        <button type='button' className='text-white bg-indigo-600 font-medium rounded-lg px-5 py-4
                        text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out'>
                            Search here
                        </button>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <img className='ml-auto' src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'/>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default HeroSection

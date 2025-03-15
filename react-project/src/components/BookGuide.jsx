import React from 'react'

const BookGuide = () => {
  return (
    <>
        <section id='destination' className='py-5'>
            <div className='container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row'>
                <div className='lg:w-1/2'>
                    <img className='ml-auto w-[80%] m-[4rem]' src={Image}/>
                </div>
                <div className='mb-14 lg:mb-0 lg:w-1/2'>
                    <h1 className='max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center
                    lg:text-left lg:leading-tight mb-5'>
                        Book A Trusted Guide
                    </h1>
                    <p className='max-x-xl text-lg text-center text-gray-500 lg:text-left lg:max-w-md'>
                        Connect with passionate guides who know the city like the back of their hand.
                    </p>
                    <div className='flex justify-center mt-5 lg:justify-start'>
                        <button type='button' className='text-white bg-[#f15d30] font-medium rounded-lg px-5 py-4
                        text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out'>
                            Book A Guide
                        </button>
                    </div>
                </div>
                
            </div>
        </section>
      
    </>
  )
}

export default BookGuide

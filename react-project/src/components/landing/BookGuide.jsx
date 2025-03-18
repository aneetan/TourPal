import React from 'react'
import { useNavigate } from 'react-router'

const BookGuide = () => {
    const navigate = useNavigate();

    const handleGuideView = () => {
        navigate("/viewGuides")
        
    }
  return (
    <>
        <section id='guide' className='py-5 bg-[#F9FAFC]'>
            <div className='container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row'>
                
                <div className='mb-14 lg:mb-0 lg:w-1/2'>
                    <h1 className='max-w-xl text-[2.5rem] leading-none text-gray-900 font-extrabold font-sans text-center
                    lg:text-left lg:leading-tight mb-5'>
                        Book A <br/> Trusted Guide
                    </h1>
                    <p className='max-x-xl text-[1.2rem] text-center text-gray-500 lg:text-left lg:max-w-md'>
                        Connect with passionate guides who know the city like the back of their hand.
                    </p>
                    <div className='flex justify-center mt-5 lg:justify-start'>
                        <button type='button' className='text-white bg-[#f15d30] font-medium rounded-lg px-5 py-4
                        text-center hover:bg-[#f15d30] hover:drop-shadow-md hover:scale-102 transition
                        cursor-pointer duration-300 ease-in-out'
                        onClick={handleGuideView}
                        >
                            Book A Guide
                        </button>
                    </div>
                </div>

                <div className='lg:w-1/2'>
                    <img className='ml-auto w-[80%] m-[3rem]' src="https://www.traveleast.in/wp-content/uploads/2022/08/Nepal-2-1024x683.jpg"/>
                </div>
                
            </div>
        </section>
      
    </>
  )
}

export default BookGuide

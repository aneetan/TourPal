import React from 'react'

const About = () => {
  return (
        <>
            <section id='about' className='py-5 md:h-full flex items-center mx-16 my-9' >
                <div className='container px-5 py-24 mx-auto'>
                    <div className="text-center mb-12">
                        <h1 className="mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl ">Know More About Us</h1>
                        <p className="mb-6 text-lg  text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We're with you on your journey</p>
                    </div>

                    <div className=' container flex flex-wrap -m-4'>
                        <div className='p-4 sm:w-1/2 lg:w-1/3 hover:scale-102 transition-all duration-100 ease-in'>
                            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                                <img src='https://www.himalayanst.com/uploads/media/Blogs/places-to-visit-in-kathmandu/chandragiri.jpg' alt='image'
                                className='lg:h-60 md:h-48 w-full object-cover object-center'/>
                                <div className='p-6'>
                                    <h1 className='text-2xl text-[#F47D59] text-center font-bold mb-3'> Discover What's Around You </h1>
                                    <p className='leading-relaxed text-[#888E9B] text-center mb-3'> From popular spots to hidden gems, find amazing destinations just a tap away!</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 sm:w-1/2 lg:w-1/3 hover:scale-102 transition-all duration-100 ease-in'>
                            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                                <img src='https://s3.us-west-1.amazonaws.com/assets.activeadventures.com/public/blog-images/Active%2520guide%2520with%2520locals__ResizedImageWzYwMCw0MDBd.jpg' alt='image'
                                className='lg:h-60 md:h-48 w-full object-cover object-center'/>
                                <div className='p-6 '>
                                    <h1 className='text-2xl text-[#F47D59] text-center font-bold mb-3'> Book Your Personalized Travel Buddy</h1>
                                    <p className='leading-relaxed text-[#888E9B] text-center mb-3'> Connect with experienced local guides for unforgettable experiences! </p>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 sm:w-1/2 lg:w-1/3 hover:scale-102 transition-all duration-100 ease-in'>
                            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                                <img src='https://www.himalayanst.com/uploads/media/Blogs/places-to-visit-in-kathmandu/chandragiri.jpg' alt='image'
                                className='lg:h-60 md:h-48 w-full object-cover object-center'/>
                                <div className='p-6'>
                                    <h1 className='text-2xl text-[#F47D59] text-center font-bold mb-3'> Unlock the Unseen </h1>
                                    <p className='leading-relaxed text-[#888E9B] text-center mb-3'> Discover secret places no one else dares to explore! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      
            </section>
        </>
  )
}

export default About

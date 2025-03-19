import React from 'react'
import BackGround from '../../assets/images/hero.jpg'

const HeroSection = () => {
  return (
    <>
        <section id='home' className='py-5 bg-custom-image h-screen'
            style={{
                backgroundImage: `url(${BackGround})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginTop: '-80px',
            }}
        >
            <div className="absolute inset-0 z-0 bg-[#F9FAFC]/40" ></div>
            
            <div className='container relative z-40 flex flex-wrap items-center justify-center mx-auto mt-35 md:px-12 md:flex-row'>
                <div className='mb-14 lg:mb-0 lg:w-1/2'>
                    <h1 className='max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center
                    lg:text-left lg:leading-tight mb-5'>
                        Find exciting <span className='text-[#f15d30] text-[3.2rem]'> Destinations </span> <br/> near you with ease!

                    </h1>
                    <div className='flex justify-center mt-5 lg:justify-start'>
                        <button type='button' className='text-white bg-[#F15d30] font-medium rounded-lg px-5 py-4
                        text-center hover:bg-[#f15d30] hover:drop-shadow-md hover:scale-102 transition
                        cursor-pointer duration-300 ease-in-out'>
                            Get started
                        </button>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    {/* <div className="flex items-center sm:-mx-4">
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                        <div className="relative z-10 my-4">
                            <img
                            src="https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="w-full rounded-2xl"
                            />
                        </div>
                    </div>
                        <div className="w-full px-3 sm:px-4 xl:w-1/2">
                            <div className="py-3 sm:py-4">
                                <img
                                src="https://media.istockphoto.com/id/1095633104/photo/mt-shuksan-reflection-in-washington-usa.jpg?s=1024x1024&w=is&k=20&c=Mw4RXN0zS84szjYHd17pT3U4w4EOM4ZdgLe4079n9lU="
                                alt=""
                                className="w-full rounded-2xl"
                                />
                            </div>
                            <div className="py-3 sm:py-4">
                                <img
                                src="https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="w-full rounded-2xl"
                                />
                            </div>
                        </div>
                    
                    </div> */}
                </div>
            </div>
        </section>
      
    </>
  )
}

export default HeroSection

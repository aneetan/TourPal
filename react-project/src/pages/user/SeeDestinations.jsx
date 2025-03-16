import React from 'react'
import Navbar from '../../components/landing/Navbar'
import Footer from '../../components/landing/Footer'
import Carousel from '../../components/Carousel'
import { useParams } from 'react-router'

const SeeDestinations = () => {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ysaLP0SSBQGw7lsIztLl6vUAehZwGYRsIQ&s",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9f/cb/fd/caption.jpg?w=1200&h=-1&s=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUp1bRbuRJXKeLEhNQNJSw7dOJgklQPiaXQ&s",
        "https://live.staticflickr.com/8451/7982344422_ba612eedba_b.jpg",
    ]

  return (
    <>
            {/* Text Section */}
            <div className="bg-white z-10 text-center">
                    <h2 className="text-3xl mt-10 font-semibold text-[#f15d30]">
                        About Godawari
                    </h2>
            </div>

            <section className='pb-10'>
                <div className='container flex flex-wrap items-center justify-center mx-auto mt-10 md:flex-row'>
                    <div className='lg:w-1/2 sm:my-10'>
                        {/* Carousel */}
                        <div className="flex justify-center items-center">
                            <div className="w-[100%] mx-10">
                                <Carousel autoSlide={true} autoSlideInterval={3000}>
                                    {images.map((imageUrl, index) => (
                                        <img
                                            key={index}
                                            src={imageUrl}
                                            className="w-full h-full object-cover"
                                            alt={`Image ${index + 1}`}
                                        />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>

                    <div className='mb-14 lg:mb-0 lg:w-1/2'>
                        <h1 className='max-w-xl text-3xl leading-none text-gray-900 font-semibold text-center
                        lg:text-left lg:leading-tight mb-5'>
                            Description
                        </h1>
                        <p className='max-x-xl text-[1.1rem] text-center text-gray-500 lg:text-left lg:max-w-md'>
                        A tranquil paradise known for its rich biodiversity and serene environment.
                        <ul>
                            <li>🌳 Lush Greenery & Diverse Flora </li>
                            <li> 🦋 Bird Watching & Wildlife Spotting </li>
                            <li> 🚶‍♂️ Nature Trails & Hiking </li>
                            <li> 🌼 Picnic & Relaxation Spots </li>
                        </ul>

                        </p>
                        <div className='flex justify-center mt-5 lg:justify-start'>
                            <button type='button' className='text-white bg-[#f15d30] font-medium rounded-lg px-5 py-4
                            text-center hover:bg-[#f15d30] hover:drop-shadow-md hover:scale-102 transition
                            cursor-pointer duration-300 ease-in-out'>
                                Book A Guide
                            </button>
                        </div>
                    </div>
                    
                </div>
            </section>
    </>
  )
}

export default SeeDestinations

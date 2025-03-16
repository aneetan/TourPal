import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'

const Carousel = ({children: images, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [current, setCurrent] = useState(0)

    const prev = () => {
        setCurrent((current) => (current === 0? images.length -1: current-1))
    }

    const next = () => {
        setCurrent((current) => (current === images.length -1 ? 0: current+1))
    }

    useEffect(() => {
        if(!autoSlide)
            return

        const slideInterval = setInterval(next, autoSlideInterval)
        return() => clearInterval(slideInterval)
    }, []);

  return (
    <>
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500'
                style={{transform: `translateX(-${current * 100}%)`}}  //translate 100% to next image
            >
                 {images.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full">
                        {slide}
                    </div>
                ))}
            </div>
            <div className='absolute inset-0 flex w-[full] items-center justify-between p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white'>
                    <LeftCircleOutlined size={40}/>
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white'>
                    <RightCircleOutlined size={40}/>
                </button>
            </div>
        </div>
      
    </>
  )
}

export default Carousel

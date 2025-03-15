import React from 'react'
import Image from '../assets/images/image.png'
import GoogleMap from './GoogleMap';

const Destinations = () => {
    const mapSrc ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.087452149963!2d85.31643212601386!3d27.672566664897197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cb05097d61%3A0x66d083a187176a11!2sVIRINCHI%20COLLEGE!5e0!3m2!1sen!2snp!4v1742028665421!5m2!1sen!2snp';
  
    return (
    <>
        <section id='destinations' className='py-5'>
            <div className='container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row'>
                <div className='lg:w-1/2'>
                    {/* <img className='ml-auto w-[80%] m-[4rem]' src={Image}/> */}
                    <GoogleMap src={mapSrc} width={500} height={350}  />
                </div>
                <div className='mb-14 lg:mb-0 lg:w-1/2'>
                    <h1 className='max-w-xl text-[2.5rem] leading-none text-gray-900 font-extrabold font-sans text-center
                    lg:text-left lg:leading-tight mb-5'>
                       Explore Beyond <br/>  the Ordinary
                    </h1>
                    <p className='max-x-xl text-[1.2rem] text-center text-gray-500 lg:text-left lg:max-w-md'>
                        Discover must-see places and secret spots near you
                    </p>
                    <div className='flex justify-center mt-5 lg:justify-start'>
                        <button type='button' className='text-white bg-[#f15d30] font-medium rounded-lg px-5 py-4
                        text-center hover:bg-[#f15d30] hover:drop-shadow-md hover:scale-102 transition duration-300
                        cursor-pointer ease-in-out'>
                            See Nearby Destinations
                        </button>
                    </div>
                </div>
                
            </div>
        </section>
      
    </>
  )
}

export default Destinations

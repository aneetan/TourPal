import React from 'react'

const About = () => {
  return (
        <>
            <section id='about' className='py-5 mx-16' >
                <h1 class="mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Know More About Us</h1>
                <p class="mb-6 text-lg  text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We're with you on your journey</p>
                <div className='container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row'>
                    <div class="grid grid-cols-2 g:w-1/2 md:grid-cols-4 gap-4">
                        <div class="grid gap-4">
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="grid gap-4 mt-[2rem]">
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="grid gap-4 mt-[2rem]">
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
  )
}

export default About

import React from 'react'

const Footer = () => {
  return (
    <>
        <section>
            <footer class="bg-[#F9FAFC] dark:bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="/" class="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TourPal</span>
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Get started</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="/" class="hover:underline">Login</a>
                                </li>
                                <li className='mb-4'> 
                                    <a href="" class="hover:underline">Signup</a>
                                </li>
                                <li>
                                    <a href="" class="hover:underline">Book A Guide</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="/" class="hover:underline ">Facebook</a>
                                </li>
                                <li className='mb-4'> 
                                    <a href="" class="hover:underline">Instagram</a>
                                </li>
                                <li>
                                    <a href="/" class="hover:underline">Tiktok</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="flex items-center justify-center">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">TourPal</a>. All Rights Reserved.
                    </span>
                </div>
                </div>
            </footer>

        </section>
      
    </>
  )
}

export default Footer

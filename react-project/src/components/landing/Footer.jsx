import React from 'react'
import Logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <>
        <section>
            <footer className="bg-[#F9FAFC] dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src={Logo} className="h-15 me-3" alt="Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TourPal</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Get started</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/login" className="hover:underline">Login</a>
                                </li>
                                <li className='mb-4'> 
                                    <a href="/register" className="hover:underline">Signup</a>
                                </li>
                                <li>
                                    <a href="/viewGuides" className="hover:underline">Book A Guide</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">Facebook</a>
                                </li>
                                <li className='mb-4'> 
                                    <a href="#" className="hover:underline">Instagram</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Tiktok</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/terms" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="/" className="hover:underline">TourPal</a>. All Rights Reserved.
                    </span>
                </div>
                </div>
            </footer>

        </section>
      
    </>
  )
}

export default Footer

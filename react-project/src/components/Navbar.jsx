import React, { useState } from 'react'
import Logo from '../assets/images/tourguidelogo.png'
import { MenuOutlined, CloseOutlined} from '@ant-design/icons';


const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	  };

  	return (
	<>
		<nav className='py-5 bg-white sticky top-0 border-b border-gray-100'>
			<div className="container md:px-12 md:flex md:items-center md:justify-between">
				<div className="flex items-center justify-between">
					<a href='#' className='flex items-center'>
						{/* <img src={Logo} alt='logo' className='h-10 mr-3'/> */}
						<span className='text-2xl text-gray-900 font-sans font-bold'> TourPal </span>
					</a>
					<span className='block mx-2 text-3xl bg-gray-100 p-2 rounded-lg md:hidden' onClick={handleMenu}>
						{/* <i className='menu bx bx-menu w-6 h-6' onClick="Menu(this)"></i> */}
						{/* <box-icon name='menu' className='bx bx-menu w-6 h-6' ></box-icon> */}
						{isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
					</span>
				</div>

				<ul className={`p-5 z-10 absolute bg-white/80 backdrop-blur w-full left-0 py-4 opacity-0
				top-[-400px] transition-all ease-in duration-500 md:p-0 md:flex md:items-center
				md:space-x-8 md:static md:w-auto ${isMenuOpen ? 'top-[80px] opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'}`}>
					<li className='md:my-0'>
						<a href='#home' className='font-medium duration-500 text-gray-900 hover:text-indigo-600'> Home</a>
					</li>
					<li className='my-6 md:my-0'>
						<a href='#home' className='font-medium duration-500 text-gray-900 hover:text-indigo-600'> About</a>
					</li>
					<li className='my-6 md:my-0'>
						<a href='#home' className='font-medium duration-500 text-gray-900 hover:text-indigo-600'> Services </a>
					</li>
					<li className='my-6 md:my-0'>
						<a href='#home' className='font-medium duration-500 text-gray-900 hover:text-indigo-600'> Contact </a>
					</li>
					<div className="mt-6 md:mt-0 md:ml-8">
					<a href='#'>
						<button
						type='button'
						className={`w-full md:w-auto text-white bg-indigo-600 font-medium rounded-lg px-3.5 py-3
							text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out
							${isMenuOpen ? 'ms:opacity-100' : 'opacity-0'} block md:hidden`}
						>
						Login
						</button>
					</a>
					</div>
				</ul>

			<div className="hidden md:block">
				<a href='#'>
				<button
					type='button'
					className='text-white bg-indigo-600 font-medium rounded-lg px-3.5 py-3 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out'
				>
					Login
				</button>
				</a>
			</div>

			</div>

		</nav>
	</>
	 
  )
}

export default Navbar

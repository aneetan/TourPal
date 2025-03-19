import React, { useEffect, useState } from 'react'
import { MenuOutlined, CloseOutlined, FlagFilled} from '@ant-design/icons';
import HeroSection from './HeroSection';
import { useNavigate } from 'react-router';
import Logo from '../Logo';


const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeLink, setActiveLink] = useState("home");
	const navigate = useNavigate()

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	  };
	
	const handleActiveLink = (link) => {
		setActiveLink(link);
	}

	const handleLogin = () => {
		if (localStorage.getItem("is_user") === "2" ){
			localStorage.setItem("is_user", 0)
			navigate('/')
			return
		}
		navigate('/login')
	}

	useEffect(() => {
		const handleScroll = () => {
			if(window.scrollY > 100) {
				setIsScrolled(!isScrolled);
			} else {
				setIsScrolled(isScrolled);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return() => {
			window.removeEventListener("scroll", handleScroll)
		}

	},[]);

  	return (
	<>
		<nav className={`sticky z-50 top-0 transition-colors duration-500 
			${isScrolled? "bg-[#f9fafc] shadow-md border-b border-gray-100" : "bg-transparent border-transparent"}`}>

			<div className="container md:px-12 md:flex md:items-center md:justify-between">
				<div className="flex items-center justify-between">
					<a href='#' className='flex items-center justify-center'>
						{/* <img src={Logo} alt='logo' className='h-10 mr-3'/> */}
						<Logo width="80px"/>
						<span className='text-2xl text-gray-900 font-sans font-bold'> TourPal </span>
					</a>
					<span className='block mx-2 text-3xl bg-gray-100 p-2 rounded-lg md:hidden' onClick={handleMenu}>
						{/* <i className='menu bx bx-menu w-6 h-6' onClick="Menu(this)"></i> */}
						{/* <box-icon name='menu' className='bx bx-menu w-6 h-6' ></box-icon> */}
						{isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
					</span>
				</div>

				<ul className={`p-5 z-10 absolute w-full left-0 py-4 opacity-0
				top-[-400px] transition-all ease-in duration-500 md:p-0 md:flex md:items-center
				md:space-x-8 md:static md:w-auto ${isMenuOpen ? 'top-[80px] opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'}
				bg-white md:bg-transparent`}>
					<li className='md:my-0'>
						<a href='#home' className={`font-medium duration-500 hover:text-[#f15d30]
						${activeLink === 'home' ? 'text-[#f15d30]' : 'text-gray-900'}`}
						onClick={() => handleActiveLink('home')}> Home</a>
					</li>
					<li className='my-6 md:my-0'>
						<a href='#destinations' className={`font-medium duration-500 hover:text-[#f15d30]
						${activeLink === 'destinations' ? 'text-[#f15d30]' : 'text-gray-900'}`}
						onClick={() => handleActiveLink('destinations')}> Destinations</a>
					</li>
					<li className='my-6 md:my-0'>
						<a href='#guide' className={`font-medium duration-500 hover:text-[#f15d30]
						${activeLink === 'guide' ? 'text-[#f15d30]' : 'text-gray-900'}`}
						onClick={() => handleActiveLink('guide')}> Guide </a>
					</li>
					<li className='my-6 md:my-0'>
						<a href='#about' className={`font-medium duration-500 hover:text-[#f15d30]
						${activeLink === 'about' ? 'text-[#f15d30]' : 'text-gray-900'}`}
						onClick={() => handleActiveLink('about')}> About </a>
					</li>
					<div className="mt-6 md:mt-0 md:ml-8 md:flex">
						<button
							type='button'
							onClick={handleLogin}
							className={`w-full md:w-auto text-white bg-[#F15d30] font-medium rounded-lg px-3.5 py-3
								text-center hover:bg-[#f15d30] hover:drop-shadow-md transition cursor-pointer duration-300 ease-in-out
								${isMenuOpen ? 'ms:opacity-100' : 'opacity-0'} block md:hidden`}
						>
							{localStorage.getItem("is_user") === "2" ? "Logout" : "Login"}
							</button>
					</div>
				</ul>

			<div className="hidden md:block">
				<a href='#'>
				<button
					type='button'
					onClick={handleLogin}
					className='text-white bg-[#f15d30] cursor-pointer font-medium rounded-lg px-6 py-3 text-center hover:bg-[#f15d30]
					hover:scale-101 hover:drop-shadow-md transition duration-300 ease-in-out'
				>
					{localStorage.getItem("is_user") === "2" ? "Logout" : "Login"}

				</button>
				</a>
			</div>

			</div>

		</nav>
	</>
	 
  )
}

export default Navbar

import React, { useEffect, useState } from 'react'
import { MenuOutlined, CloseOutlined, FlagFilled} from '@ant-design/icons';
import HeroSection from './HeroSection';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import Logo from '../Logo';


const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const navigate = useNavigate()
	const isUser = localStorage.getItem("is_user")
	const userId = localStorage.getItem("userId")

	const getActiveState = () => {
		const path = location.pathname;
		const hash = location.hash;
	
		if (path === '/' && !hash) return 'home';
		if (hash === '#destinations') return 'destinations';
		if (path === '/viewGuides') return 'bookGuide';
		if (hash === '#guide') return 'registerGuide';
		if (hash === '#about') return 'about';
		if (path.startsWith('/profile')) return 'profile';
		return '';
	};

	const [activeLink, setActiveLink] = useState(getActiveState());

	useEffect(() => {
		setActiveLink(getActiveState());
	  }, [location]);

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	  };

	 const isHomeActive = () => {
		return location.pathname === '/' && !location.hash;
	  };
	const handleLogin = () => {
		if (localStorage.getItem("is_user") === "2" ){
			localStorage.setItem("is_user", 0)
			navigate('/')
			return
		}
		navigate('/login')
	}

	useEffect(() => {
		if (location.hash) {
		  const element = document.getElementById(location.hash.substring(1));
		  if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		  }
		} else {
		  window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	  }, [location]);

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
					<NavLink to='/' className='flex items-center justify-center' onClick={() => setActiveLink('home')}>
						<Logo width="80px"/>
						<span className='text-2xl text-gray-900 font-sans font-bold'> TourPal </span>
					</NavLink>
					<span className='block mx-2 text-3xl bg-gray-100 p-2 rounded-lg md:hidden' onClick={handleMenu}>
						{isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
					</span>
				</div>

				<ul className={`p-5 z-10 absolute w-full left-0 py-4 opacity-0
				top-[-400px] transition-all ease-in duration-500 md:p-0 md:flex md:items-center
				md:space-x-8 md:static md:w-auto ${isMenuOpen ? 'top-[80px] opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'}
				bg-white md:bg-transparent`}>
					<li className='md:my-0'>
						 <NavLink 
							to="/" 
							end
							className={`font-medium duration-500 hover:text-[#f15d30] ${
								activeLink === 'home' ? 'text-[#f15d30]' : 'text-gray-900'
							  }`}
							onClick={() => setActiveLink('home')}
						>
							Home
						</NavLink>
					</li>
					<li className='my-6 md:my-0'>
					<NavLink 
						to="/#destinations" 
						className={`font-medium duration-500 hover:text-[#f15d30] ${
							activeLink === 'destinations' ? 'text-[#f15d30]' : 'text-gray-900'
						}`}
						onClick={() => setActiveLink('destinations')}
					>
						Destinations
					</NavLink>
					</li>
					<li className='my-6 md:my-0'>
						<NavLink
							to="/viewGuides" 
							className={`font-medium duration-500 hover:text-[#f15d30] ${
								activeLink === 'bookGuide' ? 'text-[#f15d30]' : 'text-gray-900'
							  }`}
							onClick={() => setActiveLink('bookGuide')}						
						>
							Book A Guide
						</NavLink>
					</li>
					<li className='my-6 md:my-0'>
						<Link 
							to="/#guide" 
							className={`font-medium duration-500 hover:text-[#f15d30] ${
								activeLink === 'registerGuide' ? 'text-[#f15d30]' : 'text-gray-900'
							  }`}
							onClick={() => setActiveLink('registerGuide')}
						>
							Register as Guide
						</Link>
					</li>
					<li className='my-6 md:my-0'>
						<Link 
							to="/#about" 
							className={`font-medium duration-500 hover:text-[#f15d30] ${
								activeLink === 'about' ? 'text-[#f15d30]' : 'text-gray-900'
							  }`}
							onClick={() => setActiveLink('about')}
						>
							About
						</Link>
					</li>
					{isUser === "2"? (
					<li className='my-6 md:my-0'>
						<NavLink 
						to={`/profile/${userId}`} 	
						className={`font-medium duration-500 hover:text-[#f15d30] ${
							activeLink === 'profile' ? 'text-[#f15d30]' : 'text-gray-900'
						  }`}
						onClick={() => setActiveLink('profile')}
						>
						Profile
						</NavLink>
					</li>
					):(
						null
					)}
					<div className="mt-6 md:mt-0 md:ml-8 md:flex">
						<button
							type='button'
							onClick={handleLogin}
							className={`w-full md:w-auto text-white bg-[#F15d30] font-medium rounded-lg px-3.5 py-3
								text-center hover:bg-[#f15d30] hover:drop-shadow-md transition cursor-pointer duration-300 ease-in-out
								${isMenuOpen ? 'ms:opacity-100' : 'opacity-0'} block md:hidden`}
						>
							{isUser === "2" ? "Logout" : "Login"}
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
					{isUser === "2" ? "Logout" : "Login"}

				</button>
				</a>
			</div>

			</div>

		</nav>
	</>
	 
  )
}

export default Navbar

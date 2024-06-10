import React from 'react'
import ReactSVG from '../assets/react.svg'

const Navbar = () => {
	return (
		<nav  
			className='
				bg-transparent items-center flex justify-between px-80 py-6 text-lg font-sans font-normal
				xl:px-40
				lg:px-20
				md:px-0 md:justify-center md:text-sm
				sm:px-4 sm:justify-center sm:gap-3
			'>
			<div 
				className='
					flex flex-row items-center space-x-4
					md:mr-2 md:space-x-2
					sm:space-x-1
				'>
				<img src={ReactSVG} alt="" className='w-8 h-auto'/>
				<p>Carl Joseph Tan</p>
			</div>
			<ul 
				className='
					flex flex-row space-x-10 pointer-events-auto cursor-pointer
					xl:space-x-8
					lg:space-x-6
					md:space-x-2
					sm:space-x-3
				'>
				<li><a href="#projects" className='border-black hover:border-b-2'>Project</a></li>	
				<li><a href="#aboutMe" className='border-black hover:border-b-2'>About Me</a></li>	
			</ul>
		</nav>
	)
}

export default Navbar
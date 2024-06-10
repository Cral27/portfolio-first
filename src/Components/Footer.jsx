import React from 'react'
import Github from '../assets/github-colored-2.svg'
import Facebook from '../assets/fb-colored.svg'
import Linkedin from '../assets/linkedin-colored.svg'

const Footer = () => {
	return (
		<footer className='w-full flex justify-center items-center bg-black text-white pt-24 pb-3'>
			<main className='w-4/5'>
				<div className='flex flex-row justify-around'>
					<div className='flex flex-col justify-center lg:text-sm md:text-xs sm:text-xs'>
						<p>Carl Joseph Tan</p>
						<p>An aspiring frontend developer</p>
					</div>
					<div className='flex flex-col justify-end items-end'>
						<p className='lg:text-sm md:text-xs sm:text-xs'>Socials</p>
						<ul className='flex flex-row justify-end items-center h-8 gap-2 w-1/2 cursor-pointer'>
							<a href="https://github.com/Cral27"><li><img src={Github} alt="" className='bg-transparent w-14 h-14 md:w-12 md:h-12 sm:w-12 sm:h-12'/></li></a>
							<a href="https://www.facebook.com/carljoseph.tan.5/"><li><img src={Facebook} alt="" className='bg-transparent w-14 h-14 sm:w-12 sm:h-12'/></li></a>
							<a href="https://www.linkedin.com/in/carl-joseph-tan"><li><img src={Linkedin} alt="" className='bg-transparent w-16 h-16 sm:w-14 sm:h-14' /></li></a>
						</ul>
					</div>
				</div>
				<div className='pt-5'>
					<hr className='w-4/5 mx-auto pb-5 md:w-full sm:w-full'/>
					<p className='text-center text-xs'>@ Copyright 2024 . Made by Carl Joseph Tan</p>
				</div>
			</main>
		</footer>
	)
}

export default Footer
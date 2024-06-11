import React from 'react'
import Github from '../assets/github.svg'
import Facebook from '../assets/facebook.svg'
import Linkedin from '../assets/linkedin.svg'
import Heart from '../assets/heart.svg'
import './CSS/SideLinks.css'

const SideLinks = () => {
	return (
		<main className='h-screen gap-5 flex flex-col justify-center items-center fixed pointer-events-auto'>
			<div className='w-16 flex justify-center items-center gap-2 flex-col p-2 py-4 bg-gray-100 sidebar shadow-lg '>
				<a href="https://github.com/Cral27" className='icon p-2'><img src={Github} alt="" title='github-link' className='w-10 cursor-pointer'/></a>
				<a href="https://www.facebook.com/carljoseph.tan.5/" className='icon p-2'><img src={Facebook} alt="" title='facebook-link' className='w-10 cursor-pointer'/></a>
				<a href="https://www.linkedin.com/in/carl-joseph-tan" className='icon p-2'><img src={Linkedin} alt="" title='linked-link' className='w-10 cursor-pointer'/></a>
				<img src={Heart} alt="" title='credits-svg' className='w-10 icon p-2' />
			</div>
		</main>
	)
}

export default SideLinks
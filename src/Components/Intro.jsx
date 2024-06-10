import React, { useRef,useEffect } from 'react'
import profile from '../assets/2x2_nobg.png'
import './CSS/intro.css'

const Intro = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if(entry.isIntersecting){
						entry.target.classList.add('animate');
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.5 }
		)

		const line_1 = document.querySelector('.line1')
		if(line_1) {observer.observe(line_1)}

		const line_2 = document.querySelector('.line2')
		if(line_2){observer.observe(line_2)}

		const line_3 = document.querySelector('.line3')
		if(line_3){observer.observe(line_3)}

		return () => observer.disconnect()
	})

	return (
		<main 	
			className='
				flex flex-row items-center justify-around px-40 -mt-8 h-screen bg-transparent
				xl:px-8
				lg:justify-between lg:gap-10 lg:px-4 lg:ml-20
				md:flex-col-reverse md:gap-20 md:justify-center
				sm:flex-col-reverse sm:gap-20 sm:justify-center
			'>
			<div className='ml-14'>
				<p 
					className='
						text-2xl tracking-widest line1
						xl:text-xl
						lg:text-lg
						md:text-lg
						sm:text-sm
					'>HELLO,</p>
				<h1 
					className='
						text-7xl mt-2 mb-5 line2
						xl:text-6xl
						lg:text-5xl
						md:text-5xl
						sm:text-3xl sm:w-60
					'>I'm Carl Tan</h1>
				<h2 className='
						text-5xl font-light leading-10 line3
						xl:text-4xl
						lg:text-3xl
						md:text-3xl
						sm:text-xl sm:leading-5 sm:w-60
					'>A Frontend Developer</h2>
			</div>
			<div>
				<div 
					className='
						w-96 h-96 rounded-full overflow-hidden shadow-xl
						xl:w-72 xl:h-72
						lg:w-64 lg:h-64
						md:w-56 md:h-56
						sm:w-52 sm:h-52
					'>
					<img src={profile} alt="" className='bg-slate-300 rounded-full random-bg'/>
				</div>
			</div>
		</main>
	)
}

export default Intro


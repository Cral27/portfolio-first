import React, { useEffect, useRef } from 'react'
import PHP from '../assets/php.svg'
import MySql from '../assets/mysql.svg'
import Node from '../assets/node.svg'
import Js from '../assets/js.svg'
import ReactLogo from '../assets/react-logo.svg'
import Bootstrap from '../assets/bootstrap.svg'
import Html from '../assets/html.svg'
import Css from '../assets/css.svg'
import Codeigniter from '../assets/codeigniter.svg'
import MongoDb from '../assets/mongodb.svg'
import './CSS/AboutMe.css'

const AboutMe = () => {
	const imagesRef = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.5 }
		);
	
		const headText = document.querySelector('.head_text');
		if (headText) {observer.observe(headText)}
	
		imagesRef.current.forEach(image => {
			if (image) {observer.observe(image)}
		});
	
		return () => observer.disconnect();
	}, []);

	return (
		<main 
			id='aboutMe'
			className='
				flex flex-col px-80 py-32 h-screen 
				xl:w-screen xl:px-60 
				lg:w-screen lg:px-40
				md:w-screen md:px-16
				sm:w-full sm:px-0
			'>
			<div className='head_text'>
				<div className='flex flex-col justify-center items-center text-center py-10'>
					<h2 
						className='
							text-6xl text-center m-auto
							xl:text-5xl
							lg:text-4xl
							md:text-3xl
							sm:text-3xl
						'>About Me</h2>
					<hr 
						className='
							h-1 w-3/5 bg-black my-4 font-thin
							md:w-2/5
							sm:w-2/5
						'/>
				</div>
				<div 
					className='leading-8 font-2xl text-justify w-4/5 flex flex-col justify-center items-center mx-auto
					xl:w-full xl:text-base xl:tracking-base
					lg:w-fit lg:text-sm lg:leading-6
					md:w-8/12 md:leading-6 md:mb-4 md:text-xs
					sm:w-7/12 sm:leading-5 sm:mb-4 sm:text-xs
				'>
					<p className='mb-2'>Hi, I am a Carl Joseph Tan, a career shifter transitioning from electrical engineering to pursue my passion in Web Development.
					During the pandemic, I discovered my interest in frontend development, and from then on I've been on a journey to explore on how web development works and the art of creating a good web experience.</p>
				</div>
			</div>
			<div className='
					relative bg-transparent mt-10 w-4/5 mx-auto
					xl:w-full
					lg:w-full
				'>
				<h2 className='
					text-12xl absolute text-black top-2/4 left-2/4 opacity-10 tracking-widest mx-auto
					lg:text-10xl
					md:text-9xl
					sm:text-8xl
				' id='skills'>SKILLS</h2>
				<div className='
					grid grid-cols-5 grid-gap-10 my-4 img-container mx-auto justify-center
					xl:grid-gap-4
					lg:grid-gap-2 lg:w-4/5
					md:grid-gap-2 md:w-4/5
					sm:grid-gap-1 sm:w-4/5
				'>
					<img ref={el => imagesRef.current[0] = el} src={PHP} alt="" 
						className='
							min-w-20 max-w-20 max-h-20 min-h-20 images 
							xl:min-w-16 xl:max-w-16 xl:max-h-16 xl:min-h-16
							lg:min-w-14 lg:max-w-14 lg:max-h-14 lg:min-h-14
							md:min-w-12 md:max-w-12 md:max-h-12 md:min-h-12
							sm:min-w-10 sm:max-w-10 sm:max-h-10 sm:min-h-10
						'/>
					<img ref={el => imagesRef.current[1] = el} src={Js} alt="" 
						className='
							min-w-20 max-w-20 max-h-20 min-h-20 images
							xl:min-w-16 xl:max-w-16 xl:max-h-16 xl:min-h-16
							lg:min-w-14 lg:max-w-14 lg:max-h-14 lg:min-h-14
							md:min-w-12 md:max-w-12 md:max-h-12 md:min-h-12
							sm:min-w-10 sm:max-w-10 sm:max-h-10 sm:min-h-10
						'/>
					<img ref={el => imagesRef.current[2] = el} src={Html} alt="" 
						className='
							min-w-20 max-w-20 max-h-20 min-h-20 images
							xl:min-w-16 xl:max-w-16 xl:max-h-16 xl:min-h-16
							lg:min-w-14 lg:max-w-14 lg:max-h-14 lg:min-h-14
							md:min-w-12 md:max-w-12 md:max-h-12 md:min-h-12
							sm:min-w-10 sm:max-w-10 sm:max-h-10 sm:min-h-10
						'/>
					<img ref={el => imagesRef.current[3] = el} src={Node} alt="" 
						className='
							min-w-20 max-w-20 max-h-20 min-h-20 images
							xl:min-w-16 xl:max-w-16 xl:max-h-16 xl:min-h-16
							lg:min-w-14 lg:max-w-14 lg:max-h-14 lg:min-h-14
							md:min-w-12 md:max-w-12 md:max-h-12 md:min-h-12
							sm:min-w-10 sm:max-w-10 sm:max-h-10 sm:min-h-10
						'/>
					<img ref={el => imagesRef.current[4] = el} src={Codeigniter} alt="" 
						className='
							min-w-20 max-w-20 max-h-20 min-h-20 images
							xl:min-w-16 xl:max-w-16 xl:max-h-16 xl:min-h-16
							lg:min-w-14 lg:max-w-14 lg:max-h-14 lg:min-h-14
							md:min-w-12 md:max-w-12 md:max-h-12 md:min-h-12
							sm:min-w-10 sm:max-w-10 sm:max-h-10 sm:min-h-10
						'/>
				</div>
				<div className='
					grid grid-cols-5 grid-gap-10 my-4 img-container mx-auto justify-center
					xl:grid-gap-4
					lg:grid-gap-2 lg:w-4/5
					md:grid-gap-2 md:w-4/5
					sm:grid-gap-1 sm:w-4/5
				'>
					<img ref={el => imagesRef.current[5] = el} src={ReactLogo} alt="" 
						className='
							min-w-20 max-w-20 max-h-20 min-h-20 images
							xl:min-w-16 xl:max-w-16 xl:max-h-16 xl:min-h-16
							lg:min-w-14 lg:max-w-14 lg:max-h-14 lg:min-h-14
							md:min-w-12 md:max-w-12 md:max-h-12 md:min-h-12
							sm:min-w-10 sm:max-w-10 sm:max-h-10 sm:min-h-10
						'/>
					<img ref={el => imagesRef.current[6] = el} src={Bootstrap} alt="" 
						className='
							min-w-20 max-w-20 max-h-20 min-h-20 images
							xl:min-w-16 xl:max-w-16 xl:max-h-16 xl:min-h-16
							lg:min-w-14 lg:max-w-14 lg:max-h-14 lg:min-h-14
							md:min-w-12 md:max-w-12 md:max-h-12 md:min-h-12
							sm:min-w-10 sm:max-w-10 sm:max-h-10 sm:min-h-10
						'/>
					<img ref={el => imagesRef.current[7] = el} src={Css} alt="" 
						className='
							min-w-20 max-w-20 max-h-20 min-h-20 images
							xl:min-w-16 xl:max-w-16 xl:max-h-16 xl:min-h-16
							lg:min-w-14 lg:max-w-14 lg:max-h-14 lg:min-h-14
							md:min-w-12 md:max-w-12 md:max-h-12 md:min-h-12
							sm:min-w-10 sm:max-w-10 sm:max-h-10 sm:min-h-10
						'/>
					<img ref={el => imagesRef.current[8] = el} src={MongoDb} alt="" 
						className='
							min-w-20 max-w-20 max-h-20 min-h-20 images
							xl:min-w-16 xl:max-w-16 xl:max-h-16 xl:min-h-16
							lg:min-w-14 lg:max-w-14 lg:max-h-14 lg:min-h-14
							md:min-w-12 md:max-w-12 md:max-h-12 md:min-h-12
							sm:min-w-10 sm:max-w-10 sm:max-h-10 sm:min-h-10
						'/>
					<img ref={el => imagesRef.current[9] = el} src={MySql} alt="" 
						className='
							min-w-20 max-w-20 max-h-20 min-h-20 images
							xl:min-w-16 xl:max-w-16 xl:max-h-16 xl:min-h-16
							lg:min-w-14 lg:max-w-14 lg:max-h-14 lg:min-h-14
							md:min-w-12 md:max-w-12 md:max-h-12 md:min-h-12
							sm:min-w-10 sm:max-w-10 sm:max-h-10 sm:min-h-10
						'/>
				</div>
			</div>
		</main>
	)
}

export default AboutMe



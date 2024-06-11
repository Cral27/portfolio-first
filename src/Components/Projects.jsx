import React, { useEffect, useRef } from 'react';
import './CSS/Projects.css'

const Projects = () => {

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if(entry.isIntersecting) {
						entry.target.classList.add('animate')
						observer.unobserve(entry.target)	
					}	
				})
			},
			{ threshold: 0.5 }
		)

		const container = document.querySelector('.container')
		if(container) {observer.observe(container)}

		const container2 = document.querySelector('.container2')
		if(container2) {observer.observe(container2)}

		const headText = document.querySelector('.headText')
		if(headText) {observer.observe(headText)}

		return () => observer.disconnect();
	}, [])

	return (
		<div id='projects' className=' h-screen py-40 lg:py-20 md:py-16'>
			<div className='flex flex-col w-4/5 items-center justify-center m-auto headText'>
				<h1 className='
					justify-center text-6xl text-center m-auto
					xl:text-5xl
					lg:text-4xl
					md:text-3xl
					sm:text-2xl
				'>Recent Projects</h1>
				<hr className='
					h-1 w-3/5 bg-black my-4 font-thin mb-14
					xl:w-3/5
					lg:w-2/5
					md:w-2/5
					sm:w-3/5
				'/>
			</div>
			<main className="
				px-60 flex flex-row gap-20 justify-center
				lg:flex-col lg:gap-5 lg:px-32 lg:mx-auto
				md:flex-col md:px-24 md:gap-5
				sm:flex-col sm:px-10 sm:gap-2
			">
					<div className="
						w-160 h-80 pb-14 mb-8 bg-gray-200 rounded-2xl flex flex-col items-center shadow-md relative group container
						xl:h-72 xl:w-96
						lg:h-72 lg:w-128 lg:mx-auto
						md:h-60 md:w-96 md:mx-auto
						sm:h-48 sm:w-72 sm:mx-auto
					">
						<a href="https://www.youtube.com/watch?v=KzwN5JAbD_8" target="_blank" rel="noopener noreferrer" 
							className="
								w-full h-96
								xl:h-72 xl:w-96
								lg:h-72 lg:w-128
								md:h-60 md:w-96
								sm:h-48 sm:w-72
							">
							<img
								src="https://img.youtube.com/vi/KzwN5JAbD_8/maxresdefault.jpg"
								alt="Ecommerce Website"
								className="
									object-cover w-full h-96 rounded-2xl group-hover:transform hover:scale-110
									xl:h-72 xl:w-96
									lg:h-72 lg:w-128
									md:h-60 md:w-96
									sm:h-48 sm:w-72
								"
							/>
						</a>
						<div 
							className="
								flex flex-col justify-center items-center w-full h-96 pb-14 mb-8 p-20 absolute opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-75 rounded-2xl
								xl:h-72 xl:w-96
								lg:h-72 lg:w-128
								md:h-60 md:w-96
								sm:h-48 sm:w-72
							">
							<p className="
								text-lg mb-5 text-white text-justify
								xl:text-base xl:w-72
								md:text-sm md:w-60
								sm:text-xs sm:w-52 sm:mb-2
							">
								Techshop is an ecommerce website that was built using React JS framework for the frontend, Express JS and Node JS for the backend, and MongoDB for the database.
							</p>
							<div className="flex gap-4 mt-4 transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition duration-300 ease-in-out">
								<a href="https://youtu.be/KzwN5JAbD_8" target='_blank'>
									<button className="
										py-2 px-6 bg-gray-500 text-white rounded-full w-40
										xl:w-32
										md:w-24 md:text-sm md:text-center
										sm:w-20 sm:text-sm sm:text-center sm:px-2
									">Video</button>
								</a>
								<a href="https://github.com/Cral27/Ecommerce" target='_blank'>
									<button className="
										py-2 px-6 bg-gray-500 text-white rounded-full w-40
										xl:w-32
										md:w-24 md:text-sm md:text-center
										sm:w-20 sm:text-sm sm:text-center sm:px-2
									">Github</button>
								</a>
							</div>
						</div>
					</div>
					<div 
						className="
							w-160 h-96 pb-14 mb-8 bg-gray-200 rounded-2xl flex flex-col items-center shadow-md relative group container2
							xl:h-72 xl:w-96
							lg:h-72 lg:w-128 lg:mx-auto
							md:h-60 md:w-96 md:mx-auto
							sm:h-48 sm:w-72 sm:mx-auto
						">
						<a href="https://www.youtube.com/watch?v=OVTskGSPe4Y" target="_blank" rel="noopener noreferrer" 
							className="
								w-full h-96
								xl:h-72 xl:w-96
								lg:h-72 lg:w-128
								md:h-60 md:w-96
								sm:h-48 sm:w-72
							">
							<img
								src="https://img.youtube.com/vi/OVTskGSPe4Y/maxresdefault.jpg"
								alt="Remind Me App"
								className="
									object-cover w-full h-96 rounded-2xl group-hover:transform hover:scale-110
									xl:h-72 xl:w-96
									lg:h-72 lg:w-128
									md:h-60 md:w-96
									sm:h-48 sm:w-72
							"/>
						</a>
						<div className="
							flex flex-col justify-center items-center w-full h-96 pb-14 mb-8 p-20 absolute opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-75 rounded-2xl
							xl:h-72 xl:w-96
							lg:h-72 lg:w-128
							md:h-60 md:w-96
							sm:h-48 sm:w-72
						">
							<p className="
								text-lg text-white mb-5 text-justify
								xl:text-base xl:w-72
								md:text-sm md:w-60
								sm:text-xs sm:w-52 sm:mb-2
							">
								Remind Me app is a mobile app that helps visually impaired users to navigate and check their task logger on the upcoming task on any day. The app is built using React Native.
							</p>
							<div className="flex gap-4 mt-4 transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition duration-300 ease-in-out">
								<a href="https://youtu.be/OVTskGSPe4Y" target='_blank'>
									<button className="
										py-2 px-6 bg-gray-500 text-white rounded-full w-40
										xl:w-32
										md:w-24 md:text-sm md:text-center
										sm:w-20 sm:text-sm sm:text-center sm:px-2
									">Video</button>
								</a>
								<a href="https://github.com/Cral27/Capstone" target='_blank'>
									<button className="
										py-2 px-6 bg-gray-500 text-white rounded-full w-40
										xl:w-32
										md:w-24 md:text-sm md:text-center
										sm:w-20 sm:text-sm sm:text-center sm:px-2
									">Github</button>
								</a>
							</div>
						</div>
					</div>
			</main>
		</div>
	);
};

export default Projects;



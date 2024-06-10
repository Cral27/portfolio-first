import React from 'react'
import './CSS/Thanks.css'

const Thanks = () => {
	return (
		<main className='thanks flex flex-col justify-center items-center'>
			<h1 className='text-2xl my-4'>Special Thanks for</h1>
			<div className='flex flex-row gap-10 mb-4 text-center'>
				<div className='border rounded-lg px-4 py-2 shadow-md flex flex-col justify-center items-center'>
					<h2>Icons8 for some of the SVG's</h2>
					<a href="https://icons8.com/icon/106567/github"><button className='border bg-black text-white w-12 rounded-lg'>Site</button></a>
				</div>
				<div className='border rounded-lg px-4 py-2 shadow-md flex flex-col justify-center items-center'>
					<h2>Vecteezy for Background image</h2>
					<a href="https://www.vecteezy.com/"><button className='border bg-black text-white w-12 rounded-lg'>Site</button></a>
				</div>
			</div>
		</main>
	)
}

export default Thanks
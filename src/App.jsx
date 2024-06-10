import './App.css'
import AboutMe from './Components/AboutMe'
import Footer from './Components/Footer'
import Intro from './Components/Intro'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import SideLinks from './Components/SideLinks'
import { ParallaxProvider } from 'react-scroll-parallax'
import Thanks from './Components/Thanks'

export default function App() {
	return (
		<>
			<ParallaxProvider>
				<div className='bg-intro'>
					<Navbar />
					<SideLinks />
					<Intro />
				</div>
				<Projects />
				<AboutMe />
				<Footer />
			</ParallaxProvider>
		</>
	)
}
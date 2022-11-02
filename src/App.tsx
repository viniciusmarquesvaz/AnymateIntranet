import './styles/global.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainFirstPage } from './components/Pages/MainFirstPage';
import { WavyContainer } from 'react-wavy-transitions';

function App() {
	const About = () => <div>About</div>;
	// const Contact = () => <div>Contact</div>;
	return (
		<BrowserRouter>
			<WavyContainer />
			<Routes>
				<Route index element={<MainFirstPage />} />

				<Route path="about" element={<About />} />
				<Route path="/company1" element={<>Company 1</>} />
				<Route path="/company2" element={<>Company 2</>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

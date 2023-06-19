import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/';

function RouteDeshboard() {
	
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default RouteDeshboard;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const usePromiseAll = async (url1, url2) => {
	const req1 = axios.get(url1);
	const req2 = axios.get(url2);
	return await Promise.all([req1, req2]);
}

const App = () => {
	const promise = usePromiseAll('https://api.nasa.gov/planetary/apod', 'https://api.nasa.gov/planetary/apod')
	console.log('runs first');
	promise
		.then(response => console.log('runs when resolved', response))
	return (<>
		<h1>Ok</h1>
	</>)
}

export default App;

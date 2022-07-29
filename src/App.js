import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Quotes from './Components/Quotes/Quotes';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import Homepage from './Components/Homepage/Homepage';
import SpaceX from './Components/SpaceX/SpaceX';

function App() {
	const [Loading, setLoading] = useState(true);
	const [CurrentTime, setCurrentTime] = useState();
	const [CurrentDate, setCurrentDate] = useState();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	useEffect(() => {
		const Time = setInterval(() => {
			setCurrentTime(
				new Date().toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric',
					hour12: false,
				})
			);
		}, 1000);

		const NewDate = setInterval(() => {
			setCurrentDate(
				new Date().toLocaleString('en-US', {
					day: '2-digit',
					month: '2-digit',
					year: '2-digit',
				})
			);
		}, 1000);

		return () => {
			clearInterval(Time);
			clearInterval(NewDate);
		};
	}, []);

	return (
		<BrowserRouter>
			<div className="App">
				{Loading ? (
					<LoadingScreen />
				) : (
					<>
						<div className="NavContainer">
							<span>{CurrentTime}</span>
							<span>{CurrentDate}</span>
						</div>

						<Routes>
							<Route path="/" element={<Homepage />}>
								{Homepage}
							</Route>
							<Route path="/Quotes" element={<Quotes />}>
								{Quotes}
							</Route>
							<Route path="/SpaceX" element={<SpaceX />}>
								{SpaceX}
							</Route>
						</Routes>
					</>
				)}
			</div>
		</BrowserRouter>
	);
}

export default App;

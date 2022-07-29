import axios from 'axios';
import { useNavigate } from 'react-router';
import { React, useEffect, useState } from 'react';

function SpaceX() {
	const [FlightDetails, setFlightDetails] = useState();
	const navigate = useNavigate();

	const ReturnHome = () => {
		navigate('/');
	};

	useEffect(() => {
		axios
			.get('https://api.spacexdata.com/v5/launches/latest')
			.then((result) => {
				let Data = result.data;
				setFlightDetails(
					<>
						<span>
							<h3>Flight Number: {Data.flight_number}</h3>
							<h3>Flight Name: {Data.name}</h3>
							<h3>Flight Date: {Data.date_local.slice(0, 10)}</h3>
						</span>

						<h4>Mission Status: {Data.success ? 'Success' : 'Failure'}</h4>

						<div className="ButtonContainer">
							<span className="ReturnHomeButtonContainer">
								<button
									className="ReturnHomeButton"
									onClick={() => {
										ReturnHome();
									}}
								>
									Return Home
								</button>
							</span>
							<a href={Data.links.reddit.campaign}>
								<button className="ReadMoreButton">Read More</button>
							</a>
						</div>
					</>
				);
			});
	}, []);

	return (
		<div className="SpaceXContainer">
			<h2>SpaceX Latest Launch</h2>
			{FlightDetails}
		</div>
	);
}

export default SpaceX;

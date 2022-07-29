import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
	return (
		<div className="HomepageContainer">
			<div className="LinkContainer">
				<Link to="/Quotes">Quotes</Link>
				<Link to="/">Placeholder</Link>
				<Link to="/SpaceX">SpaceX</Link>
			</div>
		</div>
	);
}

export default Homepage;

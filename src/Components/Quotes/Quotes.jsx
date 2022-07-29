import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Quotes() {
	const APIURL = 'https://api.adviceslip.com/advice';
	const [AdviceID, setAdviceID] = useState();
	const [Advice, setAdvice] = useState();
	const navigate = useNavigate();

	const PullData = () => {
		axios.get(APIURL).then((result) => {
			let Information = result.data.slip;
			setAdvice(Information.advice);
			setAdviceID(Information.id);
		});
	};

	const ReturnHome = () => {
		navigate('/');
	};

	useEffect(() => {
		PullData();
	}, []);

	return (
		<div className="QuotesContainer">
			<h2>Quotes</h2>

			<div className="AdviceContainer">
				<h3>{Advice}</h3>
				<h4>Advice Number: {AdviceID}</h4>
			</div>
			<div className="ButtonContainer">
				<button
					className="AdviceReturnButton"
					onClick={() => {
						ReturnHome();
					}}
				>
					Return Home
				</button>
				<button
					className="AdviceButton"
					onClick={() => {
						PullData();
					}}
				>
					Pull Data
				</button>
			</div>
		</div>
	);
}

export default Quotes;

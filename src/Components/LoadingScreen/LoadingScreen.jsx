import ClipLoader from 'react-spinners/BarLoader';

function LoadingScreen() {
	return (
		<div className="sweet-loading LoadingScreenContainer">
			<ClipLoader color={'#22b455'} size={150} />
		</div>
	);
}

export default LoadingScreen;

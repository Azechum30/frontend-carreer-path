import PropTypes from 'prop-types';

export default function Die(props) {
	return (
		<div
			className={`w-[60px] h-[60px] flex items-center justify-center shadow-md rounded-lg cursor-pointer ${
				props.isHeld ? 'bg-green-400' : 'bg-white'
			}`}
			onClick={props.holdDice}>
			<h2 className='text-3xl font-bold'>{props.value}</h2>
		</div>
	);
}

Die.propTypes = {
	value: PropTypes.number,
	holdDice: PropTypes.any,
	isHeld: PropTypes.bool,
};
